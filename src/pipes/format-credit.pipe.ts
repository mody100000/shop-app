import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCredit',
  standalone: true,
})
export class FormatCreditPipe implements PipeTransform {
  transform(value: string, disVal: string): string {
    const format = value.match(/.{1,4}/g);
    return format ? format.join('-') : '';
  }
}
