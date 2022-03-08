import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { MakananComponent } from './makanan/makanan.component';
import { MinumanComponent } from './minuman/minuman.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddctgrComponent } from './addctgr/addctgr.component';
import {ToastNoAnimationModule, ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    MakananComponent,
    MinumanComponent,
    AddctgrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
