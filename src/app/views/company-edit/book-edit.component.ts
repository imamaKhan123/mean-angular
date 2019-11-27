import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
id:string = '';
companyID: String='';
  companyName: String='';
  companyPhone: String='';
  companyEmail: String='';
  companyAddress: String='';
  companyDescription: String='';



constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }


getBook(id) {
  this.api.getCompany(id).subscribe(data => {
    this.id = data._id;
    this.bookForm.setValue({
      isbn: data.companyID,
      title: data.companyName,
      description: data.companyEmail,
      author: data.companyAddress,
      publisher: data.companyDescription,
      published_year:data.companyPhone 
    });
  });
} 

onFormSubmit(form:NgForm) {
  this.api.updateCompany(this.id, form)
    .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/company-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
}
bookDetails() {
  this.router.navigate(['/company-details', this.id]);
}

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

}
