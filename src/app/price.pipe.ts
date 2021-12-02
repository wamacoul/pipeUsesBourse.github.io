import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number , unit: number): number {

    const amount  = price/unit;
    return amount;

  }
}
