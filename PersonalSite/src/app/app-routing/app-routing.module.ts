import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WorkComponent } from '../work/work.component';
import { AboutComponent } from '../about/about.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:'full' },

  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: 'contact', component: ContactMeComponent }
  ] },
  { path: '**', redirectTo:"about", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
