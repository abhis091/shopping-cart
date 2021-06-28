import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpInterceptor } from './AppHttpInterceptor';
import { ElectronicsComponent } from './modules/lazy-components/electronics/electronics.component';
import { WomensClothingComponent } from './modules/lazy-components/womens-clothing/womens-clothing.component';
import { MensClothingComponent } from './modules/lazy-components/mens-clothing/mens-clothing.component';
import { JeweleryComponent } from './modules/lazy-components/jewelery/jewelery.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ElectronicsComponent,
    WomensClothingComponent,
    MensClothingComponent,
    JeweleryComponent,
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
