import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericFilter',
})
export class GenericFilterPipe implements PipeTransform {

  transform(objects: any[], searchValue: string): any {
    if (!searchValue) { return objects; }
    return objects.filter(item => this.checkMatchInObject(item, searchValue));
  }

  private checkMatchInObject(object: any, value: string): boolean {
    return Object.keys(object).some((k) => {
      if (typeof object[k] === 'string') {
        return object[k].toLowerCase().includes(value.toLowerCase());
      }
      if (typeof object[k] === 'object' && object[k]) {
        return this.checkMatchInObject(object[k], value);
      }
    });
  }
}
