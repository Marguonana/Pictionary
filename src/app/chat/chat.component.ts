import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  pseudo: String;
  message: String;
  messages: String;

  constructor() {
    this.pseudo = sessionStorage.getItem('pseudo') ? sessionStorage.getItem('pseudo') : 'randomUser';
    this.message = "";
    this.messages="";
  }

  ngOnInit() {}

  posterMessage() {
    if(this.message != ""){
      this.messages+= this.pseudo + " : " + this.message + "\n";
      this.message="";
    }
  }
}
