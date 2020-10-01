import { Component, OnDestroy, OnInit } from '@angular/core';
import { Stock, UpdateStocksService } from '../update-stocks.service';
import { distinct, takeWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit, OnDestroy {

  stocksList: Stock[] = [];
  pageActive = true;
  test = new Subscription()
  constructor(private updateStockService: UpdateStocksService) { }

  ngOnInit(): void {
    this.test = this.updateStockService.loadStocksSubject.pipe(
      takeWhile(() => this.pageActive)
      ).subscribe(() => {
        this.getStocks();
      });
      this.getStocks();
  }

  getStocks(): void {
    this.updateStockService.updateStocks().subscribe((stocks) => {
      this.stocksList = stocks;
    });
  }

  setColor(stock:Stock) {
    return {
      positiv: stock.changeinPercent.includes('+'),
      negativ: stock.changeinPercent.includes('-')
    };
  }
  ngOnDestroy() {
    this.pageActive = false;
  }

}
