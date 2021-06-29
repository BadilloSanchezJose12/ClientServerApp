import { Component, OnInit } from '@angular/core';
import { User, UserResult } from 'src/app/Interfaces/user';
import {UsersService} from '../../services/users.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:User [];
  constructor( private service:UsersService) { 
    this.users = []
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(( dataUsers:UserResult)=> {
      this.users = dataUsers.data
      console.log(dataUsers.data)
    })
  }

}
