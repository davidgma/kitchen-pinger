import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ClockfaceComponent } from './clockface/clockface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconSettingsComponent } from './icons/icon-settings/icon-settings.component';
import { IconHomeComponent } from './icons/icon-home/icon-home.component';
import { IconStopwatchComponent } from './icons/icon-stopwatch/icon-stopwatch.component';
import { IconDayComponent } from './icons/icon-day/icon-day.component';
import { IconEditComponent } from './icons/icon-edit/icon-edit.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footers/footer/footer.component';
import { PageClockComponent } from './pages/page-clock/page-clock.component';
import { PageStopwatchComponent } from './pages/page-stopwatch/page-stopwatch.component';
import { PageWrapperComponent } from './pages/page-wrapper/page-wrapper.component';
import { IconClockComponent } from './icons/icon-clock/icon-clock.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { IconTimerComponent } from './icons/icon-timer/icon-timer.component';
import { PageTimerComponent } from './pages/page-timer/page-timer.component';
import { FooterTimerComponent } from './footers/footer-timer/footer-timer.component';
import { IconCancelComponent } from './icons/icon-cancel/icon-cancel.component';
import { IconShortcutComponent } from './icons/icon-shortcut/icon-shortcut.component';
import { IconDigitalComponent } from './icons/icon-digital/icon-digital.component';
import { PageSettingsTimerComponent } from './pages/page-settings-timer/page-settings-timer.component';
import { IconResetComponent } from './icons/icon-reset/icon-reset.component';
import { FooterStopwatchComponent } from './footers/footer-stopwatch/footer-stopwatch.component';
import { IconStartComponent } from './icons/icon-start/icon-start.component';
import { IconPauseComponent } from './icons/icon-pause/icon-pause.component';
import { FooterClockComponent } from './footers/footer-clock/footer-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockfaceComponent,
    IconSettingsComponent,
    IconHomeComponent,
    FooterComponent,
    IconDayComponent,
    IconEditComponent,
    HeaderNavComponent,
    IconStopwatchComponent,
    PageClockComponent,
    PageStopwatchComponent,
    PageWrapperComponent,
    IconClockComponent,
    PageSettingsComponent,
    IconTimerComponent,
    PageTimerComponent,
    FooterTimerComponent,
    IconCancelComponent,
    IconShortcutComponent,
    IconDigitalComponent,
    PageSettingsTimerComponent,
    IconResetComponent,
    FooterStopwatchComponent,
    IconStartComponent,
    IconPauseComponent,
    FooterClockComponent
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
