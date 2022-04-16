import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  archiveList: any;
  

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }
  getArchiveList() {
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res.data);
       this.archiveList=res.data
       this.archiveList = res.data.filter((object: any) => {
        return object.isArchive === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("insidegetallnotes", $event);
      this.getArchiveList();

  }

}