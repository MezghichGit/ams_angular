import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  tab:string[]=[];
  constructor(private service:UserService){ // l'injection d'un dépendence = un service
    console.log("constructeur");
  }

  ngOnInit(){
    console.log("ngOnInit");
    this.tab = this.service.getAllUsers();
  }

}
