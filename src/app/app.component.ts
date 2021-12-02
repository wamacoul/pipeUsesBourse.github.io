import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bourse';
  data = new Data().getData();
  devise = new Devise().getDevise();

  deviseClass:any=this.devise[0];
}
class Data {
  data = [
    {
      id : 1,
      name : "Goldman sax",
      quantity : 2,
      price_unit : 15.5,
      price_dollar : 31,
    },
    {
      id : 2,
      name : "General Motor",
      quantity : 100,
      price_unit : 22,
      price_dollar : 2200,
    },
    {
      id : 3,
      name : "AIG",
      quantity : 82,
      price_unit : 8.3,
      price_dollar : 680.6,
    },
  ];
  getData() {
    return this.data;
  }
}
class Devise {
  devise = [
    {
      id : 0,
      name : "Dollar",
      taux : 1,
    },
    {
      id : 1,
      name : "XAF",
      taux : 0.0017,
    },
    {
      id : 2,
      name : "Euro",
      taux : 0.0017,
    },
    {
      id : 3,
      name : "Livre sterling",
      taux : 1.33,
    },
    {
      id : 4,
      name : "Peso mexicain",
      taux : 0.047,
    },
    {
      id : 5,
      name : "Naira",
      taux : 0.0027,
    },
    {
      id : 6,
      name : "Rand",
      taux : 0.063,
    },
    {
      id : 7,
      name : "Rouble",
      taux : 0.014,
    },
    {
      id : 8,
      name : "Riyal Saoudien",
      taux : 0.27,
    },
    {
      id : 9,
      name : "Yen",
      taux : 0.0087,
    },
    {
      id : 10,
      name : "Roupie Indienne",
      taux : 0.0013,
    },
    {
      id : 11,
      name : "Yuan",
      taux : 0.16,
    },
    {
      id : 12,
      name : "Shekel",
      taux : 0.32,
    },
    {
      id : 13,
      name : "Real Bresilien",
      taux : 0.18,
    },
    {
      id : 14,
      name : "Dinar tunisien",
      taux : 0.0013,
    },
    {
      id : 15,
      name : "Dollar canadien",
      taux : 0.78,
    },
    {
      id : 16,
      name : "Couronne norvegienne",
      taux : 0.11,
    },
    {
      id : 17,
      name : "Franc congolais",
      taux : 0.0005,
    },
    {
      id : 18,
      name : "Livre turque",
      taux : 0.78,
    },
    {
      id : 19,
      name : "Riyal qatarien",
      taux : 0.78,
    },
    {
      id : 20,
      name : "Roupie indonesienne",
      taux : 0.00007,
    },
  ];
  getDevise() {
    return this.devise;
  }
}
