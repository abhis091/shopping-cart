import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './AppHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AppHttpInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
