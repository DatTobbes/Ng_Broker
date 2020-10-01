import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateStocksService {

  stockNames: string[] = ['aapl', 'yhoo'];
  loadStocksSubject = new Subject();

  constructor(private httpClient: HttpClient) { }

  addNewStock(stockName: string) {

    this.stockNames.push(stockName);
    this.stockNames = [...new Set(this.stockNames)];
  }

  updateStocks() {
    const stocks = this.stockNames.join('/');
    return this.httpClient.get<Stock[]>('https://stockplaceholder.herokuapp.com/api/stocks/' + stocks);
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