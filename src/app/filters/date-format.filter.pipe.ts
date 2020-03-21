import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatPipe',
  pure: false
})
export class DateFormatPipe implements PipeTransform {
    transform(formatdate:string): any {
      if(!formatdate)
        return formatdate;
      return calculateAge(formatdate);
        
    }
}
function calculateAge(date:string) {
    let difference = +Date.now() - +new Date(date);
    let ageDate = new Date(difference); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}