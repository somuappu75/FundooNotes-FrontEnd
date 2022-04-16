import { Component, EventEmitter, Inject,OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<any>();
  Title: any
  Description: any
  noteId: any


  constructor(private NoteService:NoteService, public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    console.log(data);
    this.Title = data.title
    this.Description = data.description
    this.noteId = data.notesId

  }

  ngOnInit(): void {
  }
  
  onClose() {
    let reqData = {
      Title: this.Title,
      Description: this.Description,
    }
    console.log('updated', reqData, this.noteId);

    this.NoteService.updatenote(reqData, this.noteId).subscribe((res) => {
      console.log(res);
      this.Title = ''
      this.Description = ''
      this.noteUpdated.emit(res);
       
    })
    this.dialogRef.close()
    

  }
}
