import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CompanyTemplateService } from '../../services/company-template.service';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-company-template',
  templateUrl: './company-template.component.html',
  styleUrls: ['./company-template.component.scss']
})
export class CompanyTemplateComponent implements OnInit {
  Form: FormGroup;
  company : String='';
  title: String='';
  description:  String='';
  inputFields: String='';
  creation_dt:string='';
  
  constructor(private router: Router, private api: ApiService , private CTS: CompanyTemplateService, private formBuilder: FormBuilder) { }
companies:any;
  ngOnInit() {
    this.api.getBooks()
    .subscribe(res => {
      //console.log(res);
      this.companies= res;
      console.log(this.companies);
    }, err => {
      console.log(err);
    });
    this.Form = this.formBuilder.group({
      'company' : [null],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'inputFields' : [null, Validators.required],
      
    });
  }
  onFormSubmit(form:NgForm) {
    this.CTS.postBook(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/addusers']);
        }, (err) => {
          console.log(err);
        });
  }

} 

