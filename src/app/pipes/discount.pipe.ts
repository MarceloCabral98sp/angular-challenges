import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discount: number): number {

    if(discount < 0 || discount > 100) return price;
    
    const discounted = (price / 100) * discount;
    return price - discounted;
  }

}
