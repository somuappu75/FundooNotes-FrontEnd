import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseurl=environment.baseurl

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
    return this.httpService.postService('Notes/Create',data,true,header)
  }
    getallnotes(){
      console.log("token",this.token);
  
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })
      }
      return this.httpService.getService('Notes/Getnotes', true, header)
   }
  
  }
