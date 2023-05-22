import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClockComponent } from './page-clock/page-clock.component';
import { PageStopwatchComponent } from './page-stopwatch/page-stopwatch.component';

const routes: Routes = [
  { path: 'clock', component: PageClockComponent },
  { path: 'stopwatch', component: PageStopwatchComponent },
  { path: '**', component: PageClockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
