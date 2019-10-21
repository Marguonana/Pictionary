import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  pseudo: String;
  message: String;
  messages: Array<String>;

  constructor() {
    this.pseudo = "pse";
    this.message = "";
    this.messages=new Array<String>();

  }

  ngOnInit() {

  }

  posterMessage() {
    if(this.message){
      this.messages.push(this.message);
      this.message="";
    }
  }
}
