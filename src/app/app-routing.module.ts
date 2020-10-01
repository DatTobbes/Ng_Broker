import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewStockComponent } from './add-new-stock/add-new-stock.component';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';

const routes: Routes = [
  {path: '', component: StockDashboardComponent},
  {path: 'newstock', component: AddNewStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
