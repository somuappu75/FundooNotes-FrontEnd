import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // baseurl=environment.baseurl

  token: any;
  title: any;

  result:boolean = true;
  subject = new Subject();
  
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
    getallnotes(){
      console.log("token",this.token);
  
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })
      }
      return this.httpService.getService('https://localhost:44367/api/Notes/Getnotes', true, header)
   }
   updatenote(data:any,id:any){
    console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
     })
   }
   return this.httpService.putService("https://localhost:44367/api/Notes/Update/"+id,data,true,header)
 }
  
 trashnotes(id:any){
  console.log("token",this.token);

let header ={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
      'Authorization':`Bearer  ${this.token}`
  })
}
return this.httpService.putService("https://localhost:44367/api/Notes/IsTrash/"+id,{},true,header)
}

archiveNotes(id:any){

  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })

  }
  return this.httpService.putService("https://localhost:44367/api/Notes/IsArchive/"+id,{},true,headersOption)
}

ColorNote(id:any, data:any){

  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })

  }
  return this.httpService.putService("https://localhost:44367/api/Notes/Color/"+id,data,true,headersOption)
}
deleteNote(id:any){
  console.log("token",this.token);

  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    })
  }
  return this.httpService.deleteService('https://localhost:44367/api/Notes/Delete/'+id, true, header)
}
  
getView() 
{
  this.gridview();
  return this.subject.asObservable();
}

gridview()
{
  if(this.result)
  {
    this.subject.next({data:"column"});
    this.result = false;
  }
  else
  {
    this.subject.next({data:"row"});
    this.result = true;
  }
} 
}
