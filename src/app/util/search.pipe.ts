import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(value: any, prop?: any, name?: any): any {
    let ret = value;
    if(name) {
        if (name.length > 0 && prop.length > 0) {
            ret = ret.filter(item => item[prop].toLowerCase().indexOf(name.toLowerCase()) > -1);
        }
    }

    return ret;
  }

}