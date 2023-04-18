import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //tab:string[]=[];
  users:User[]=[];
  constructor(private service:UserService){ // l'injection d'un dépendence = un service
    console.log("constructeur");
  }

  ngOnInit(){
    console.log("ng On Init");
    this.users = this.service.getAllUsers();
  }

}
