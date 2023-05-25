import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'integer'
})
export class IntegerPipe implements PipeTransform {
 
  constructor(protected _sanitizer: DomSanitizer) {
  }

  transform(int:any) {
if(int!=undefined && int!=null){
    return parseInt(int);
} else {
    return '';
}
    

  }

}



