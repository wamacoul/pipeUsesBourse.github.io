import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    PricePipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
