import { Component } from '@angular/core';


export class Income{
  constructor(public date: Date, public invoiceNo: string, public amount: number) {
  }
}
export class Expense{
  constructor(public date: Date, public reason: string, public amount: number) {
  }
}
@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage {
  incomes: Income[] = [
    {date: new Date(2020, 7, 11) , amount: 22000, invoiceNo: '005'},
    {date: new Date(2020, 7, 11), amount: 3000, invoiceNo: '006'},
    {date: new Date(2020, 7, 12), amount: 4000, invoiceNo: '007'},
    {date: new Date(2020, 7, 13), amount: 6000, invoiceNo: '008'},
  ];
  expenses: Expense[] = [
    {date: new Date(2020, 7, 11), amount: 500, reason: 'w'},
    {date: new Date(2020, 7, 11), amount: 200, reason: 'x'},
    {date: new Date(2020, 7, 12), amount: 300, reason: 'y'},
    {date: new Date(2020, 7, 13), amount: 400, reason: 'z'},
  ];

  constructor() {}

}
