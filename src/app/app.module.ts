import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddNewStockComponent } from './add-new-stock/add-new-stock.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddNewStockComponent,
    StockDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
