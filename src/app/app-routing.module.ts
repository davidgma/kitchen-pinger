import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClockComponent } from './page-clock/page-clock.component';
import { PageStopwatchComponent } from './page-stopwatch/page-stopwatch.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';

const routes: Routes = [
  { path: 'clock', component: PageClockComponent },
  { path: 'stopwatch', component: PageStopwatchComponent },
  { path: 'settings', component: PageSettingsComponent },
  { path: '**', component: PageClockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
