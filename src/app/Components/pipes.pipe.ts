import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    
    if(!value) return null;
    if(!args) return value;


    return value.filter((array: { title: string; description: string; })=>
      array.title.toLowerCase().indexOf(args.toLowerCase()) !==-1 || array.description.toLowerCase().indexOf(args.toLowerCase()) !==-1)
      
  }

}