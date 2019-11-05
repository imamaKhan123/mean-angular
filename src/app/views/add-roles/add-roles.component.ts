import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddRolesService } from '../../services/add-roles.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit {
   Form: FormGroup;
   id: String ='';
    name:  String='';
    subscriptionManage: boolean =false;
    isAdmin: Boolean=false;
    compManage:Boolean=false;
    subCompAccountManage:Boolean=false;
    roleManage: Boolean=false; 
  
  constructor(private router: Router, private api: AddRolesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      'id' : [null, Validators.required],
      'name' : [null, Validators.required],
      'subscriptionManage' : [null, Validators.required],
      'isAdmin' : [null, Validators.required],
      'compManage' : [null, Validators.required],
      'subCompAccountManage' : [null, Validators.required],
      'roleManage' : [null,Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/addusers']);
        }, (err) => {
          console.log(err);
        });
  }

} 
