import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ams project';  // un attribut
  formation:string = "Angular";

  stagiaires :string[] = ["lucas", "benoit","amine"];
  logo:string="https://www.plb.fr/app/images/logo-plb/officiel/logo-plb-Avenir.svg"

  display()
  {
    alert("Hello Angular");
    //console.log ("Hello Benoit et Lucas");
  }
}
