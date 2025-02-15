import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(name: string, separator: string = '.'): string {

    if(!name) return '';

    return name
      .trim()
      .split(/\s+/)
      .map(palavra => palavra[0].toUpperCase())
      .join(separator)
  }

}
