import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

 
  constructor(private _router:Router, private _user:UserService) { }
  
  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }
/*
  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(

      data=>{console.log(data);this._router.navigate(['/companies']);} ,
      error=>console.error(error)
    )
  }
*/
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

   // this._user.login(user).subscribe(

     // data=>{console.log(data);
     this._router.navigate(['/companies']);
    //} ,
    //  error=>console.error(error)
   // );
  }

}