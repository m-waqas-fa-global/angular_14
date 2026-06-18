import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currancyp'
})
export class CurrancypPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
