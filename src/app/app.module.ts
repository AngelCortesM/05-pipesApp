import { LOCALE_ID, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
//Configuracion del locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';

registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToolbarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' },
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
