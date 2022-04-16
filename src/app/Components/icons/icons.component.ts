import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  colorarray = ['#cdd4cf', '#32a852', '#cdcdd4', '#fff475', '#ccff90', '#a7ffeb', '##fbbc04', '#aecbfa'];
  constructor(private note: NoteService) { 
    
  }

  ngOnInit(): void {
    // this.noteId=[this.noteObject.notesId]
  }

  onDelete() {
    console.log('deleted');
    this.noteId=[this.noteObject.notesId]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
  }

  onArchive(){
    this.noteId=[this.noteObject.notesId]
    console.log('Archived');

    this.note.archiveNotes(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
    
  }

  setColor(Color:any){
    this.noteId=[this.noteObject.notesId]
    let data = {
      color : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)

  })
}
}