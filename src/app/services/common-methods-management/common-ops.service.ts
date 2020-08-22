import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonOpsService {

  constructor() { }

  getPriceRegExp(price: string) {
    return price.match(/[0-9]+/g)[0];
  }

}
