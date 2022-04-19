import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { ArchieveComponent } from '../archieve/archieve.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  notes:any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  isDeleted: boolean = false
  isArchived: boolean = false
   colorarray = [ '#fc0303', 'orange', 'yellow', '#03fc94', '#008080', '#32a2a8', '#3275a8', '#89729E', 'rgb(255,192,203)','#bc8f8f', '#a9a9a9',];
  constructor(private note: NoteService,private activatedroute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let del = this.activatedroute.snapshot.component;

    if (del == TrashComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    let arc = this.activatedroute.snapshot.component;

    if (arc == ArchieveComponent) {
      this.isArchived = true;
      console.log(this.isArchived);
    }
  }

  onDelete() {
    console.log('Note deleted');
    this.noteId=[this.noteObject.notesId]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
  }

  onArchive(){
    this.noteId=[this.noteObject.notesId]
    console.log('Note Archived ');

    this.note.archiveNotes(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
    
  }
  onDeleteForever(){
    this.noteId=[this.noteObject.notesId]
    this.note.deleteNote(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
    } )
  }

  setColor(Color:any){
    this.noteId=[this.noteObject.notesId]
    let data = {
      Color : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)

  })
}
}