import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // baseurl=environment.baseurl
  

  constructor(private http:HttpClient) {}
  postService(url:string,data:any,token:boolean=false,httpoptions:any){
    return this.http.post(url,data,token && httpoptions)
}
getService(url:string, token:boolean=false,option:any){
  return this.http.get(url, token && option)

}
putService(url:string, data:any, token:boolean=false, httpOptions:any){
  return this.http.put(url, data, token && httpOptions)
}
}