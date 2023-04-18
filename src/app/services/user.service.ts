import { Injectable } from '@angular/core';
import { User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address":  "Kulas Light",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Bret",
      "email": "Ervin.Howell@april.biz",
      "address":  "Kulas Light",
    },
    {
      "id": 3,
      "name": "Clementine.Bauch",
      "username": "Bret",
      "email": "Clementine.Bauch@april.biz",
      "address":  "Kulas Light",
    }
  ]

  constructor() { }

  /*getAllUsers():string[]
  {
      return ["Amine","Lucas","Benoit"];
  }*/

  getAllUsers():User[]
  {
    return this.users;
  }

  //get
  //post
  //put
  //delet
}
