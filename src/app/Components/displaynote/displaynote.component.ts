import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { DatashareService } from 'src/app/service/sharing/datashare.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  sentmsg: any;
  format: any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  col: any;
  constructor(public dialog: MatDialog,private dataservice:DatashareService) { }
  ngOnInit(): void {
    this.dataservice.store1.subscribe(x => this.format=x)
   }
   openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
     width: '450px',
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
    console.log("dindisplay-note-recieved");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
