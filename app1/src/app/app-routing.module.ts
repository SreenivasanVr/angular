import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { App1detailComponent } from './app1detail/app1detail.component';
import { Appdetail2Component } from './appdetail2/appdetail2.component';


const routes: Routes = [
  
  { path: 'app1', component : App1detailComponent},
  {path : 'app1/subdetail', component : Appdetail2Component},
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
