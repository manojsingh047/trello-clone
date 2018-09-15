import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSearchFocussed:boolean = false;
  
  onSearchFocus(){
    this.isSearchFocussed = true;
  }

  onSearchFocusOut(){
    this.isSearchFocussed = false;
  }

}
