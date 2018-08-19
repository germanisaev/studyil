import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { LanguagesService } from './translate/language.service';
import { PageloadedComponent } from './components/pageloaded/pageloaded.component';


@NgModule({
  declarations: [
    AppComponent, TranslatePipe, PageloadedComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ LanguagesService, TRANSLATION_PROVIDERS, TranslateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
