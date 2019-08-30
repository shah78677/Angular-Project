import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curConverter'
})
export class CurConverterPipe implements PipeTransform {

  transform(value:number, unit:String){
    if (unit == 'D'){
      var newValue = value / 80;
      return newValue.toFixed(2);
    } else if (unit == 'E')
    {
      var newValue = value / 110;
      return newValue.toFixed(2);
    }
  }

}
