import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList : any;

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList(){
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res.data);
       this.trashList=res.data
       this.trashList = res.data.filter((object: any) => {
        return object.isTrash === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("insidegetallnotes");
      this.getTrashList();

  }
}
