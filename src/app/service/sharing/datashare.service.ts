import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store1 = this.info.asObservable();

  constructor() { 

  }
  GetValue(text:any){
    this.info.next(text);
  }
}