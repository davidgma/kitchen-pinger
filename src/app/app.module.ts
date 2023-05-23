import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ClockfaceComponent } from './clockface/clockface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconSettingsComponent } from './icon-settings/icon-settings.component';
import { IconHomeComponent } from './icon-home/icon-home.component';
import { IconStopwatchComponent } from './icon-stopwatch/icon-stopwatch.component';
import { IconDayComponent } from './icon-day/icon-day.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PageClockComponent } from './page-clock/page-clock.component';
import { PageStopwatchComponent } from './page-stopwatch/page-stopwatch.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { IconClockComponent } from './icon-clock/icon-clock.component';
import { IconComponent } from './icon/icon.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';

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
    HeaderNavComponent,
    IconStopwatchComponent,
    PageClockComponent,
    PageStopwatchComponent,
    PageWrapperComponent,
    IconClockComponent,
    IconComponent,
    PageSettingsComponent
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
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
