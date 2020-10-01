import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateStocksService } from '../update-stocks.service';

@Component({
  selector: 'app-add-new-stock',
  templateUrl: './add-new-stock.component.html',
  styleUrls: ['./add-new-stock.component.css']
})
export class AddNewStockComponent implements OnInit {

  stockName = '';

  constructor(private updateStockService: UpdateStocksService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addStock() {
    this.updateStockService.addNewStock(this.stockName);
    this.router.navigate(['']);

  }

}
