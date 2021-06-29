import { Injectable } from '@angular/core';
import { UserResult } from '../Interfaces/user';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient) {
  }

   getUsers(){
     return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
   }
}
