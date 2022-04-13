import { Component,Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() childMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

}
