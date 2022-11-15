import { Injectable } from '@angular/core';
// import { Review } from '../Models/Review';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { map,Observable, of } from 'rxjs';
import { User } from '../Models/user';


const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }
  
  getUser(username:any)
  {
    return this.Http.get("http://localhost:3000/FUN/user/Username/?username="+username).pipe(map(res =>
    {
      return res;
    }));
  }
  getReview(): Observable<any[]>
  {
    return this.Http.get<any>( "http://localhost:3000/FUN/user/getAllReview");
  }
  //  submitReview(id : Review[])
  //  {
  //     return this.Http.post("http://localhost:3000/FUN/user/addReview",id).pipe(map(
  //       res =>
  //       {
  //         return res;
  //       }
  //     ));
  //  }
}
