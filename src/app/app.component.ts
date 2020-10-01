import { Component } from '@angular/core';
import { UpdateStocksService } from './update-stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private updateStockService: UpdateStocksService) { }

  refresh() {
    this.updateStockService.loadStocksSubject.next(true);

  }
}
