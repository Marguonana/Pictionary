import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-soumission-reponse",
  templateUrl: "./soumission-reponse.component.html",
  styleUrls: ["./soumission-reponse.component.css"]
})

export class SoumissionReponseComponent implements OnInit {
  private motATrouver:String;
  private motPropose:String;

  constructor() {
    this.motATrouver = "reponse";
  }

  ngOnInit() {}

  public estMotTrouve(): Boolean {
    console.log(this.motPropose);
    return this.motATrouver.toLowerCase() == this.motPropose.toLowerCase();
  }
}
