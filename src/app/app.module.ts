import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropDirectiveModule } from "angular4-drag-drop";


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { PlotComponent } from './plot/plot.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    PlotComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
