import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  register(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }

    return this.httpservice.postService("https://localhost:44367/api/User/Register",data,false,header)
  }
  login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }

    return this.httpservice.postService("https://localhost:44367/api/User/Login",data,false,header)
}
}