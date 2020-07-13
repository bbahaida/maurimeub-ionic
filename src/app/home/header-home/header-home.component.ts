import {Component, Input, OnInit} from '@angular/core';
import {IonDatetime} from '@ionic/angular';
import {Expense, Income} from '../home-page.component';

@Component({
    selector: 'app-header-home',
    templateUrl: './header-home.component.html',
    styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent implements OnInit {
    @Input() incomes: Income[] = [];
    @Input() expenses: Expense[] = [];
    revenus = 29800.00;
    date = new Date().toISOString();
    caisse = 0;
    depenses = 3455.00;

    constructor() {
    }

    ngOnInit() {
        const incomes = this.getIncomes(this.date);
        this.caisse = incomes - this.depenses;
    }

    private getIncomes(date: string) {
        if (!!date && this.incomes && this.incomes.length > 0) {
            return this.incomes
                .filter(i => i.date.toISOString() === date)
                .map(i => i.amount)
                .reduce((a, b) => a + b);
        }
        return 0;
    }

    getCaisse(date: string) {
        return this.getIncomes(date) - this.getExpenses(date);
    }

    private getExpenses(date: string) {
        if (!!date && this.expenses && this.expenses.length > 0) {
            return this.expenses
                .filter(i => i.date.toISOString() === date)
                .map(i => i.amount)
                .reduce((a, b) => a + b, 0);
        }
        return 0;
    }
}
