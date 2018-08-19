import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../translate';

import { LanguagesService } from '../../translate/language.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var $: any;

@Component({
  selector: 'app-pageloaded',
  templateUrl: './pageloaded.component.html',
  styleUrls: ['./pageloaded.component.css']
})
export class PageloadedComponent implements OnInit {

  imgUrl = "http://localhost:4200/assets/images/";

  introCarousel: string[];
  languages: string[];
  currentLang: string;
  objJSON: string[];
  defaultLang: string;

  urlJSON: string = './assets/langEN.json';
  titleIntro: any;
  languageId: string = '0';

  constructor(private http: Http,
              private _translate: TranslateService,
              private languageService: LanguagesService) {

    this.languages = [];
    this.languages.push("English");
    this.languages.push("Español");
    this.languages.push("Français");
    this.languages.push("Русский");

    // set current langage
    this.currentLang = '0';
    this._translate.use(this.currentLang);

  }

  changeLang(lang: string) {

    this._translate.use(lang);

    this.languageService.languageChange(lang);
    this.languageId = lang;
    //this.getLanguage();

  }

  ngOnInit() {

    this.currentLang = this.languages[Number(this.languageId)];
    this.getLanguage();

  }

  getLanguage() {

    this.getJSON().subscribe(data => this.objJSON = data, error => console.log(error));

  }

  public getJSON(): Observable<any> {
    return this.http.get(this.urlJSON)
      .map((response: Response) => <any>response.json())
      .do(data => console.log(JSON.stringify(data))).catch(this.handleError);
    //.catch((error:any) => console.log(error));
  }

  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || "Server error");
  }

  public loadScript(url: string) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}


function scrollOffsetTop(reportId) {
  $('html, body').animate({ scrollTop: $(reportId).offset().top + 100 }, 'slow');
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isNumber(str) {
  if (typeof str != "string") return false // we only process strings!
  // could also coerce to string: str = ""+str
  return !isNaN(Number(str)) && !isNaN(parseFloat(str))
}