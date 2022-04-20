import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { NoteService } from 'src/app/service/noteService/note.service';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/service/sharing/datashare.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  Search:any
  Grid:boolean=false

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private noteservice:NoteService,private router:Router,private datashare:DatashareService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // list: boolean = true;
  // grid: boolean = false;
  // changeView() {
  //   if (this.list) {
  //     this.grid = true;
  //     this.list = false;
  //   }
  //   else {
  //     this.list = true;
  //     this.grid = false;
  //   }
  //   this.noteservice.getView();
  // }
  onsignout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login')
  }
  
  listview(){
    this.Grid=false;
    this.datashare.GetValue(this.changeview().valueOf());
    console.log("function",this.changeview());
    console.log("grid",this.Grid);
  }

  gridview(){
    this.Grid=true
    this.datashare.GetValue(this.changeview().valueOf());
    console.log("function",this.changeview());
    console.log("grid",this.Grid);
  }
  changeFormat: boolean=false
  changeview(){
    if(this.changeFormat == false){
      this.changeFormat=true
      return this.changeFormat
    }
    else{
      this.changeFormat=false
      return this.changeFormat
    }
}
}
