import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private _router:Router,
  
     private validateService:UserService ,private authService : AuthService) { }

  ngOnInit() {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      console.log('Please fill in all fields');
      
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please enter valid email');
    }

    // Register user
    this.validateService.register(user).subscribe(data => {
      if(data){
        console.log('You are now registered and can log in');
        this._router.navigate(['/login']);
      } else {
        console.log('Something went wrong');
        this._router.navigate(['/register']);
      }
    });

  }
}