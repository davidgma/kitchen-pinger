import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ClockfaceComponent } from './clockface/clockface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { IconSettingsComponent } from './icon-settings/icon-settings.component';
import { IconHomeComponent } from './icon-home/icon-home.component';
import { FooterComponent } from './footer/footer.component';
import { IconDayComponent } from './icon-day/icon-day.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockfaceComponent,
    HeaderComponent,
    IconSettingsComponent,
    IconHomeComponent,
    FooterComponent,
    IconDayComponent,
    IconEditComponent,
    FooterNavComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
