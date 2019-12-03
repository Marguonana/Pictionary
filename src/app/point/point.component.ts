import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-point",
  templateUrl: "./point.component.html",
  styleUrls: ["./point.component.css"]
})
export class PointComponent implements OnInit {
  x: number;
  y: number;
  thickness: number;
  color: any;

  constructor() {}

  ngOnInit() {}

  getInfos(): string {
    return "[" + this.x + "; " + this.y + "]";
  }
}
