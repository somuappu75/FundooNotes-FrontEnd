import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  public notelist :boolean=false;
  description:string = ""
  title:string=""
  reminder:string="2022-04-12T16:24:35.328Z"
  color:string="pink"
  image:string="tiger.jpg"
  isarchive:boolean=false;
  ispin:boolean=false;
  istrash:boolean=false;
  createdAt:any="2022-04-12T16:24:35.328Z"
  modifiedAt:any="2022-04-12T16:24:35.328Z"

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  noteClick(){
    
    this.notelist = true
    
  }
  Close(){
    
    this.notelist = false
    console.log(this.title, this.description);
    let data={
      title: this.title,
      description:this.description,
      reminder: this.reminder,
      color: this.color,
      image: this.image,
      isTrash: this.istrash,
      isArchive: this.isarchive,
      isPinned: this.ispin,
      createdAt: this.createdAt,
      modifiedAt: this.modifiedAt
    }
    this.noteService.createnote(data).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
