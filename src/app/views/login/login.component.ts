import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  serverErrorMessages:String;
  Form: FormGroup;
  
  constructor(private _router:Router,private formBuilder: FormBuilder, private _user:UserService) { }
  
  ngOnInit() {
    this.Form = this.formBuilder.group({
       'email': ['',
        Validators.required],
      'password': [null, Validators.required],
    });
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  onFormSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    if(!this.Form.valid){
      console.log('Invalid');return;
    }

   console.log(JSON.stringify(this.Form.value));
    this._user.Authenticate(JSON.stringify(this.Form.value))
    .subscribe(  
      data => {
        console.log(data);
        if(data.success==true){
        this._user.setToken(data['token']);
        this._router.navigateByUrl('/admin');}
        else{
          console.log(data.Errors[0]);
        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );

   // this._user.login(user).subscribe(

     // data=>{console.log(data);
    // this._router.navigate(['/companies']);
    //} ,
    //  error=>console.error(error)
   // );
  }

}