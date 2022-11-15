import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Headers' : 'Content-type: application/json',
    'Access-Control-Allow-Methods' : 'POST',
    'Access-Control-Allow-Origin' : '*'
  })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  Credentials = {withCredentials: true};
  response : any;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  msgError = "";
  user = {username : String, password: String};
  constructor(private _http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  Loginuser()
  {
    let user = {
      username : this.username,
      password : this.password
    };
    let Credentials = {withCredentials:true};
    console.log(this.username);
    console.log(this.password); 
    console.log(this.user);
    let response = this._http.post<any>("http://localhost:3000/FUN/user/login",user,httpOptions).subscribe(
      {
        next : (v) => this.router.navigate(['/aboutus']),
        error : (e) => this.msgError = "Invalid Credentials, Please Enter a valid user name or password",
        complete : () => window.localStorage.setItem("username", (this.username))
      }
  
    );
  
  }
  
}
