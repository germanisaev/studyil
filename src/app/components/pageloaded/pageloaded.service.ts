
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PageLoadedService {
    //URL for CRUD operations
    //articleUrl = "http://localhost:3000/articles";
    private _url = 'assets/data.json';
    objJSON: Object[];
    //Create constructor to get Http instance
    constructor(private http: Http) {
        //var obj;
    }

    //public getJSON(i: any): Observable<any> {
    public getJSON() {
        
        this.http.get(this._url).subscribe(res => {
            this.objJSON = res.json();
        });

        //return this.http.get(urlJSON)
        //    .map((response: Response) => response.json());
        //.catch((error: any) => console.log(error));
    }
}