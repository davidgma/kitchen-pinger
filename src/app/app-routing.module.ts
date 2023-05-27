import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClockComponent } from './pages/page-clock/page-clock.component';
import { PageStopwatchComponent } from './pages/page-stopwatch/page-stopwatch.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { PageTimerComponent } from './pages/page-timer/page-timer.component';
import { PageSettingsTimerComponent } from './pages/page-settings-timer/page-settings-timer.component';

const routes: Routes = [
  { path: 'clock', component: PageClockComponent },
  { path: 'stopwatch', component: PageStopwatchComponent },
  { path: 'timer', component: PageTimerComponent },
  { path: 'settings', component: PageSettingsComponent },
  { path: 'timer/settings', component: PageSettingsTimerComponent },
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  { path: '**', component: PageClockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
