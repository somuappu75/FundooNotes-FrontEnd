import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any;
  title: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }

   createnote(data:any){
     console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': `Bearer ${this.token}`
      })
    }
    return this.httpService.postService('https://localhost:44367/api/Notes/Create',data,true,header)
    
  }
}