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
forget(data:any){
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }
 return this.httpservice.postService("https://localhost:44322/api/User/forgotPassword?email="+data.email, {}, false, header)
}
reset(data:any){
  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzb211MTIzQGdtYWlsLmNvbSIsIklkIjoiMyIsImV4cCI6MTY0OTc4NDg1M30.0ePJ1kGDYMVLzd9swZtS2YJBAEErQS-5cSiYV0eqK8k' 
    })
  }
 return this.httpservice.putService("https://localhost:44322/api/User/ResetPassword", data, true, header)
}
}