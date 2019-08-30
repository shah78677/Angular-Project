import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CurConverterPipe } from './cur-converter.pipe';
import { TempConvPipe } from './temp-conv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CurConverterPipe,
    TempConvPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
