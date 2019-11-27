import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  companyID: String='';
  companyName: String='';
  companyPhone: String='';
  companyEmail: String='';
  companyAddress: String='';
  companyDescription: String='';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'companyID' : [null, Validators.required],
      'companyName' : [null, Validators.required],
      'companyPhone' : [null, Validators.required],
      'companyEmail' : [null, Validators.required],
      'companyAddress' : [null, Validators.required],
      'companyDescription' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.api.postCompany(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/companies']);
        }, (err) => {
          console.log(err);
        });
  }

} 
