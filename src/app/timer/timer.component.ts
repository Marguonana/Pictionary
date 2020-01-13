import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  name = 'Angular 6';
  timeLeft: number = 10;
  interval;

  constructor() { }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }else if(this.timeLeft==0){
        clearInterval(this.interval);
        }else {
        this.timeLeft = 10;
      }
    },1000)
  }

  
  ngOnInit() {
  }

}
