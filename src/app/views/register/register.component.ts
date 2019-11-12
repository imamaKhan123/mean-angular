import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective,AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: {};
  emailError:String;
  Form: FormGroup;
  name:  String='' ;
  email: String=''; 
  password: String='' ;
  SysUserRole:String='';
 

  constructor(private _router:Router,private UserApi: UserService, private validateService:UserService , private formBuilder: FormBuilder,private authService : AuthService) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' :   ['',
      Validators.required],
    'password':[null, Validators.required]

    });
  
    
  }
  onTextChange(searchValue: string): void {  
    console.log(searchValue);
    if(searchValue){
    this.UserApi.checkEmail(searchValue)
    .subscribe(res => {
      //console.log(res);
      this.users= res;
      console.log(this.users);
      if (this.users){
        this.emailError="Email Already exist";
      }
      else{
        this.emailError='';
      }
    }, err => {
      console.log(err);
    });
  }
    
  }
  onFormSubmit(form:NgForm) {
    console.log(form)
    this.UserApi.register(form)
       .subscribe(res => {
           let id = res['_id'];
           this._router.navigate(['/login']);
         }, (err) => {
           console.log(err);
           });
           console.log(form);
 
     }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  



}