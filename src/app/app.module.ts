import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@share/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from '@auth/auth.module';

const MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  LayoutModule,
  SharedModule,
  AuthModule
]

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
