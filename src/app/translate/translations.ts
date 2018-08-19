// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru';
//import { LANG_HE_NAME, LANG_HE_TRANS } from './lang-he';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
export const dictionary = { 
	[LANG_EN_NAME]: LANG_EN_TRANS, 
	[LANG_ES_NAME]: LANG_ES_TRANS, 
	[LANG_FR_NAME]: LANG_FR_TRANS, 
	[LANG_RU_NAME]: LANG_RU_TRANS 
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];