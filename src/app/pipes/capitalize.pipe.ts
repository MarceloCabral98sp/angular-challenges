import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(name: string): string {
    if (!name) return name;

    return name
      .split(' ')
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join(' ');
  }
}
