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
  subscription = new Subscription();
  constructor(private updateStockService: UpdateStocksService) { }

  ngOnInit(): void {
    this.subscription = this.updateStockService.loadStocksSubject.pipe(
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
  remove(stock: Stock) {
    const index = this.stocksList.findIndex(x => x.name === stock.name);
    this.updateStockService.removeFromStockNames(index);
    this.getStocks();
  }

  setColor(change: number) {
    return {
      positiv: change > 0,
      negativ: change < 0
    };
  }
  ngOnDestroy() {
    this.pageActive = false;
  }

}
