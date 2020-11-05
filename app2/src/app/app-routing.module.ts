import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SubdetailComponent } from './subdetail/subdetail.component';


const routes: Routes = [
 
  { path: 'app2', component : DetailComponent},
  { path: 'app2/detail', component : DetailComponent},
  { path: 'app2/subdetail', component : SubdetailComponent},
  { path: '**', component : EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
