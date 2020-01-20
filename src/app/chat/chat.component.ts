import { Component, OnInit } from "@angular/core";
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  pseudo: String;
  message: String;
  messages: Array<object>;

  observableMessage: any;
  lock: boolean = false;

  constructor(private api: ApiService) {
    this.pseudo = sessionStorage.getItem('pseudoCompte') ? sessionStorage.getItem('pseudoCompte') : 'randomUser';
    this.message = "";
    this.messages=new Array<object>();

  }

  ngOnInit() {
    this.observableMessage = Observable.create((observer : any) => {
      try {
        setInterval(() => {
          observer.next(this.checkMessage())
        },2000)
      } catch (err){
        observer.error(err);
      }
    }) 
    this.observableMessage.subscribe();

  }

  checkMessage() {
    this.api.get<Array<object>>('/partie/'+sessionStorage.getItem('idPartie')+'/messages').toPromise()
    .then(messages => this.messages = messages)
    .catch(err => console.log(err))
  }

  posterMessage() {
    if(this.message){
      const msg = {emetteur : sessionStorage.getItem('pseudoCompte'), message : this.message};
      if(this.message.toUpperCase() === localStorage.getItem('key').toUpperCase()){
        this.lock = true;
      }else{
        this.lock = false;
        this.api.post('/partie/'+sessionStorage.getItem('idPartie')+'/messages', {message : msg}).toPromise()
        .then(res => {
          this.message="";
          console.log(res)
        })
        .catch(err => {
          this.message="";
          console.log(err);
        })
      }
      
    }
  }
}
