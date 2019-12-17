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
  motATrouver = "reponse";

  constructor() {
    this.pseudo = sessionStorage.getItem('pseudo') ? sessionStorage.getItem('pseudo') : 'randomUser';
    this.message = "";
    this.messages=new Array<String>();

  }

  ngOnInit() {

  }

  public estMotTrouve(): Boolean {
    if (this.message){
      return this.motATrouver.toLowerCase() == this.message.toLowerCase();
    }
   
    return false;
  }
  

  posterMessage() {
    console.log(this.estMotTrouve());
    if(this.message){
      if(this.estMotTrouve()){
        this.messages.push("********");
      }else{
      this.messages.push(this.message);
      }
      this.message="";
    }
  }
}
