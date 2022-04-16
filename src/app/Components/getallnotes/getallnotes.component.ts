import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallNotes()
  }

  getallNotes(){
    this.note.getallnotes().subscribe((res:any)=>{
    console.log("res *****",res.data);
    this.notelist=res.data;
    this.notelist.reverse();
    this.notelist = this.notelist.filter((object: any) => {
      return object.isArchive === false && object.isTrash === false;
     
    })
    console.log(this.notelist);
  })
}
receiveEvent($event: any) {
this.getallNotes();
}
receiveMessagefromdisplaycard($event: any) {
console.log("inside-get-allnotes");
this.getallNotes()
}
updatedData(value: any) {

this.getallNotes();
}
}
