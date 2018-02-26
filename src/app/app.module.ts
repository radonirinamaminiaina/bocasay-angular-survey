import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CommonPipeModule } from './pipes/common-pipe.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
