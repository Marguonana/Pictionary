import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-soumission-reponse",
  templateUrl: "./soumission-reponse.component.html",
  styleUrls: ["./soumission-reponse.component.css"]
})
export class SoumissionReponseComponent implements OnInit {
  private motPropose: String;

  constructor(motPropose: String) {
    this.motPropose = motPropose;
  }

  ngOnInit() {}

  public estMotTrouve(motATrouver: String): Boolean {
    console.log("ok");
    return this.motPropose.toLowerCase() == motATrouver.toLowerCase();
  }
}
