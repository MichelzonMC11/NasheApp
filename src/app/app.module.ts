import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {MatSliderModule} from '@angular/material/slider';
import { MatTreeModule } from '@angular/material/tree';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule,MatSliderModule,MatTreeModule,HttpClientModule,HttpClient],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
