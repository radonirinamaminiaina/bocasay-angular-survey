import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateParser'
})
export class DateParserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return null;
  }

}
