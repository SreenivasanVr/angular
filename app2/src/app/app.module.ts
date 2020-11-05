import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DetailComponent } from './detail/detail.component';
import { SubdetailComponent } from './subdetail/subdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    DetailComponent,
    SubdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
