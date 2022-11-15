import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public usrID = window.localStorage.getItem("username");
  profile: any;
  constructor(private api : UserService,  private router : Router) { }

  ngOnInit(): void {
    this.getUser
  }
  getUser(){  
    
    this.api.getUser(this.usrID)
    .subscribe
      (data  =>
      {
        console.log(data)
        this.profile = data;
      }
    );
   }
   logout()
   {
    window.localStorage.removeItem("username");
    this.router.navigate(['home']);
   }
}
