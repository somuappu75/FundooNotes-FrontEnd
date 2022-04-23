import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store1 = this.info.asObservable();

  private info2 = new Subject<any>();
  public store2 = this.info2.asObservable();
  constructor() { 

  }
  GetValue(text:any){
    this.info.next(text);
  }
  seraching(text:any){
    this.info2.next(text);
  }
}