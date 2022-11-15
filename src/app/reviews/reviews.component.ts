import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { UserService } from '../Service/user.service';
import { User } from '../Models/user';
import { Review } from '../Models/Review';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Origin': '*'
  })
};
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  user_ID: any = {};
  rating!: Number;
  title!: String;
  body!: String;
  // userStore = {user_ID: Number, username: String, password : String, firstname : String, lastname : String, 
  //   phonenmber : String};
  // store = {title : String, rating: Number, body: String};
  store = { body: String,rating : Number,title: String, user_ID : Number  };
  Credentials = {withCredentials: true};
  msgError = "";
  public uName = window.localStorage.getItem("username");
  profile : any = {};
  collection: any = {};
  page: number =1;
  count : number = 0;
  tableSize: number =3;
  tableSizes: any = [5,10,15,20];
  // public form: FormGroup;
  constructor(private _http : HttpClient, private router: Router,private api: UserService) { 
   
    // this.form = this.fb.group({
    //   rating1: ['']
    // });
  }

  ngOnInit(): void {
    // this.getUser();
    // this.getReviews();
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
  getReviews()
  {
    this.api.getReview().subscribe( res =>
      {
        this.collection = res;
      }
    );
  }
  // submitReviews()
  // {
  //   this.api.submitReview(this.store).subscribe(( res) =>{

  //   });
  // }
  submitReview()
  {
    let store = 
    {
      user : {user_ID : this.user_ID},
      title : this.title,
      rating : this.rating,
      body : this.body
    };
    let Credentials = {withCredentials: true};
    let response = this._http.post<any>("http://localhost:3000/FUN/user/addReview",store,httpOptions).subscribe(
      {
        next : (v) => console.log("Check"),
        error : (e) => this.msgError = "Unable to submit review",
        complete : () => console.log("Submit success!")
      }
    );
    console.log(response);
    console.log(this.user_ID);
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.getReviews();
  }
  onTableSizeChange(event:any) : void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getReviews();
  }
}
