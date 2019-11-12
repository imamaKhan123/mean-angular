import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective,AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { uniqueEmailValidator } from '../unique-email-validatior.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      Validators.required, // sync validator
      uniqueEmailValidator(this.UserApi) // async validator
    ],
    'password':[null, Validators.required]

    });
    this.UserApi.getUsers().subscribe();
    
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