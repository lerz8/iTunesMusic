import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim_names'
})
export class trimNamePipe implements PipeTransform {
  transform(value: string, arg1, arg2): string {

    if(value.length>arg2){
      return value.slice(arg1,arg2)+' ...';
    }
    return value;

  }
}
