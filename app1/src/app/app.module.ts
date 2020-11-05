import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App1detailComponent } from './app1detail/app1detail.component';
import { Appdetail2Component } from './appdetail2/appdetail2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    App1detailComponent,
    Appdetail2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
