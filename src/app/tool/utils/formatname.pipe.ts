import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatname'
})
export class FormatnamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]=="1"){
      return "mr. "+value;
    }
    else if(args[0]=="0"){
      return "miss. "+value;
    }
    else{
      return value;
    }
  }

}
