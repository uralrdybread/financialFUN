import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs';
import { of } from 'rxjs';
// import { FormGroup ,FormControl,FormBuilder,Validators} from '@angular/forms';


enum Role { role = 'CLIENT'}

const httpOptions   = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-type:application/json',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
  })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // public registerForm !: FormGroup;
  // registerForm!: FormGroup;
  username!: String;
  password!: String;
  confirmpass!: String;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;
  name!: String;
  phonenumber!: String;
  role = Role;
  Credentials = {withCredentials: true};
  msgError = "";
  constructor(private _http: HttpClient , private router : Router) {
    //  this.registerForm = this.formBuilder.group({
    //   username: new FormControl('',Validators.email),
    //   password: new FormControl('',Validators.required),
    //   // confirmpass: new FormControl('',Validators.required),
    //   name: new FormControl('',Validators.required),
    //   phonenumber: new FormControl('',Validators.required),
    //   role : new FormControl('',Validators.required)
    //  },
    //  {
    //   validators: this.MustMatch('password','confirmpass')
    //  }
    //  )
    }

  ngOnInit(): void {
  
  }
  // get f()
  // {
  //   return this.registerForm.controls;
  // }
  // MustMatch(password:any,confirmpass:any)
  // {
  //   return (formGroup:FormGroup) => 
  //   {
  //     const passControl = formGroup.controls[password];
  //     const conPassControl = formGroup.controls[confirmpass];

  //     if(conPassControl.errors && !conPassControl.errors['MustMatch'])
  //     {
  //       return;
  //     }
  //     if(passControl.value!==conPassControl.value)
  //     {
  //       conPassControl.setErrors({MustMatch:true});
  //     }
  //     else
  //     {
  //       conPassControl.setErrors(null);
  //     }
  //   };
  // }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  registerUser()
  {
    let user =
    {
      username: this.username,
      password : this.password,
      name : this.name,
      phonenumber : this.phonenumber,
      role : this.role.role
    };
    // console.log(this.registerForm.getRawValue());
    let Credentials = {withCredentials: true};
    let response = this._http.post<any>("http://localhost:3000/FUN/user/register",user,httpOptions).subscribe(
      {
        next: (v) => this.router.navigate(['/login']),
        error: (e) => console.error(this.msgError="User name or email  is alredy registred"),
        complete: () => console.log("Complete")
      });
  }
}
