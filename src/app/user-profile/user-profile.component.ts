import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { User } from '../Models/user';
import { ThisReceiver } from '@angular/compiler';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,DELETE',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user_ID!: Number;
  username!: String;
  password!: String;
  name!: String;
  phonenumber!: String;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  profile : any;
  msgError ="";
  userStore = {user_ID: Number, username: String, password : String, name:String,
    phonenumber : String
    };
  Credentials = {withCredentials: true};
  public uName = window.localStorage.getItem("username");
  constructor(private api: UserService, private _http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser()
  {
    this.api.getUser(this.uName).subscribe(data =>
      {
        console.log(data);
        this.profile = data;
      }
      );
  }
  update()
  {
    let userStore = 
    {
      user_ID : this.user_ID,
      username : this.username,
      password : this.password,
      name : this.name,
      phonenumber : this.phonenumber,
     
    };
    let Credentials = {withCredentials: true};
    let response = this._http.put<any>("http://localhost:3000/FUN/user/updateUser",userStore,httpOptions).subscribe(
      {
        next: (v) => this.router.navigate(['login']),
        error: (e) => console.error(this.msgError = "There was an error updating user"),
        complete: () => console.info("Complete")
      }
    );
    console.log(response);
  }
  delete()
  {
    let user_ID = this.user_ID;
    let Credentials = {withCredentials: true};
    let response = this._http.delete<any>("http://localhost:3000/FUN/user/deleteUser/" +user_ID,httpOptions).subscribe(
      {
        next: (v) => this.router.navigate(['login']),
        error : (e) => console.error(this.msgError = "Could not delete account"),
        complete : () => window.localStorage.removeItem("username")
      }
      );
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
}
