import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Subject } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateStocksService {
  emptyArray: Stock[] = [];

  stockNames: string[] = [];
  loadStocksSubject = new Subject();

  constructor(private httpClient: HttpClient) {
    this.stockNames = (JSON.parse(localStorage.getItem('stockNames')));
    this.updateStocks();
  }

  addNewStock(stockName: string) {

    this.stockNames.push(stockName);
    this.stockNames = [...new Set(this.stockNames)];
    localStorage.setItem('stockNames', JSON.stringify(this.stockNames));
  }

  updateStocks() {
    const uri = 'https://stockplaceholder.herokuapp.com/api/stocks/' + this.stockNames.join('/');
    return this.httpClient.get<Stock[]>(uri);
  }

  removeFromStockNames(index: number) {
    if (index !== -1) {
      this.stockNames.splice(index, 1);
    }
  }

}
export interface Stock {
  symbol: string;
  name: string;
  change: string;
  currency: string;
  lastTradeDate: string;
  lastTradePriceOnly: string;
  changeinPercent: string;
  lastTradeTime: string;
}
export interface Data {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface RootObject {
  data: Data;
  timestamp: number;
}