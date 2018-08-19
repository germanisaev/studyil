import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LanguagesService {

    private languageSource = new BehaviorSubject<string>("0");

    //currentLanguage = this.languageSource.asObservable();

    constructor() { }

    languageChange(id: string) {
        this.languageSource.next(id);
    }

    getlanguageChanged() {
        return this.languageSource;
    }
}