import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddRolesService } from '../../services/add-roles.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { CompanyTemplateService } from '../../services/company-template.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.scss']
})
export class NewTasksComponent implements OnInit {
title:string="משימה חדשה";

constructor(private router: Router, private api: AddRolesService,private UserApi: UserService,private CT: CompanyTemplateService,  private Com: ApiService, private formBuilder: FormBuilder) { }
Form: FormGroup;
selectedCompany:String="";
name: String="";
context:  String="";
    description: String="";
    deadline: String ="";
    status : String="";
    isDone:Boolean= false;
    company: String="";
    User: String=""; 
    department:String="";
    
  ngOnInit() {
    this.Form = new FormGroup({
      name : new FormControl(),
      context: new FormControl(),
      description: new FormControl(),
      deadline: new FormControl(),
      status: new FormControl(),
      isDone: new FormControl(),
      company: new FormControl(),
      User: new FormControl(),
      department: new FormControl()

   });
  }

}
