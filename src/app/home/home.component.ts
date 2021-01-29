import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username:string = "";
  public paragraphText:string = "";
  public showParagraph:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  handleInputClickEvent() {
    console.log("Input Event handled");
    this.showParagraph = false;
    this.username = "";
  }

  handleEvent() {
    console.log("Event handled");
    this.showParagraph = true;
    this.paragraphText = "Button was clicked .. "
  }

}
