import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchValue?: string) {
    if( !searchValue ){
      return data;
    }
    const text = [];
    for(const note of data){
        if(note.title.toLocaleLowerCase().includes(searchValue) || note.description.toLocaleLowerCase().includes(searchValue)) {
          text.push(note);
        }
    }
    return text;
  }

}