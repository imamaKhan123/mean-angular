import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddSubCompUserRolesService } from '../../services/add-sub-comp-user-roles.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

 

@Component({
  selector: 'app-add-sub-comp-roles',
  templateUrl: './add-sub-comp-roles.component.html',
  styleUrls: ['./add-sub-comp-roles.component.scss']
})
export class AddSubCompRolesComponent implements OnInit {

  Form: FormGroup;
  name:  String='';
  customerManage: Boolean =false;
  inquiryManage:  Boolean= false;
  categoryManage:Boolean= false;
  templateManage:Boolean=false;
  isCompanyAdmin:Boolean =false;
  isCommonUser: Boolean= false;
  roleManage:  Boolean= false;
 
 constructor(private router: Router, private AD: AddSubCompUserRolesService, private formBuilder: FormBuilder) { }

 ngOnInit() {
   this.Form = this.formBuilder.group({
     'name' : [null, Validators.required],
     'customerManage' : [null, Validators.required],
     'inquiryManage' : [null, Validators.required],
     'categoryManage' : [null, Validators.required],
     'templateManage' : [null, Validators.required],
     'isCompanyAdmin' : [null, Validators.required],
     'isCommonUser' : [null,Validators.required],
     'roleManage' : [null,Validators.required]
   });
 }
 onFormSubmit(form:NgForm) {
   this.AD.postBook (form)
     .subscribe(res => {
         let id = res['_id'];
         this.router.navigate(['/addusers']);
       }, (err) => {
         console.log(err);
       });
 }

} 


