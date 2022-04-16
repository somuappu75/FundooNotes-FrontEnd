import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  sentmsg: any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  col: any;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
   }
   openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
     width: '250px',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed'); 
      this.noteUpdated.emit(result);
     });
  }
  operation(value: any) {
     this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
