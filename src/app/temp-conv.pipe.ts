import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConv'
})
export class TempConvPipe implements PipeTransform {

  transform(value: number, unit:String) {
    if (unit == 'C')
    {
      var result = (value * (9/5)) + 32;
      return result.toFixed(2);
    } else if (unit == 'F')
    {
      var result = (value - 32) * (5/9);
      return result.toFixed(2);
    }
  }

}
