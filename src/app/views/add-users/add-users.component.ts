import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddRolesService } from '../../services/add-roles.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { CompanyTemplateService } from '../../services/company-template.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
 
  constructor(private router: Router, private api: AddRolesService,private UserApi: UserService,private CT: CompanyTemplateService,  private Com: ApiService, private formBuilder: FormBuilder) { }
  Form: FormGroup;
  roles: any;
  companies: any;
  Cts:any;
  Ct:any;
  selectedTem:string='';
  selectedOption: string='';
  selectedCompany: string='';
  printedOption: string;
  profilePic: String='';
  name:  String='' ;
  email: String=''; 
  bio: String='' ;
  address:  String='';
  phone: String='' ;
  password: String='' ;
  isEmailVerified:  Boolean=false;
  isSubCompanyUser: Boolean=false;
  premium : Boolean=false;
  template:String='';
  company:String='';
  SysUserRole:String='';
  SubCompUserRole:String='';
 
  ngOnInit() {
    this.api.getBooks()
    .subscribe(res => {
      //console.log(res);
      this.roles = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    });
    this.Com.getCompanies()
    .subscribe(res => {
      //console.log(res);
      this.companies = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    });
    this.CT.getBooks()
    .subscribe(res => {
      //console.log(res);
      this.Cts = res;
      console.log(this.roles);
    }, err => {
      console.log(err);
    });
    this.Form = this.formBuilder.group({
      'profilePic' : [null, Validators.required],
      'name' : [null, Validators.required],
      'email' : [null,Validators.required],
      'bio' : [null, Validators.required],
      'address' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'password' : [null, Validators.required],
      'isEmailVerified' : [null],
      'isSubCompanyUser' : [null],
      'premium' : [null],
      'template' : [null,Validators.required],
      'company' : [null,Validators.required],
      'SysUserRole' : [null,Validators.required],
      'SubCompUserRole' : [null]

    });
   
  }
  onFormSubmit(form:NgForm) {
   this.UserApi.postUser (form)
      .subscribe(res => {
          let id = res['_id'];
          //this.router.navigate(['/addusers']);
        }, (err) => {
          console.log(err);
          });
          console.log(form);

    }

  print() {
    this.printedOption = this.selectedOption;
  }
  onChange(newValue) {
    console.log(newValue);
    this.CT.getTemp(newValue)
    .subscribe(res => {
      //console.log(res);
      this.Ct= res;
      console.log(this.Ct._id);
    }, err => {
      console.log(err);
    });
}
}
 