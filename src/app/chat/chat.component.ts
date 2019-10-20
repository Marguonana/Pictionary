import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  pseudo: String;
  message: String;
  //messages: Array<String>;
  messages: String;

  constructor() {
    this.pseudo = "pse";
    this.message = "";
    //this.messages = new Array<String>();
    this.messages="";
  }

  ngOnInit() {}

  posterMessage() {
    /*console.log(this.pseudo + " : " + this.message);
    this.messages.push(this.pseudo + " : " + this.message + "\n");
    console.log(this.messages);
    this.message = "";*/
    if(this.message != ""){
      this.messages+= this.pseudo + " : " + this.message + "\n";
      this.message="";
    }
  }
}
