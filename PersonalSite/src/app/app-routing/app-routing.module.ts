import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WorkComponent } from '../work/work.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent }
    // { path: 'about', component: AboutComponent },
  ] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
