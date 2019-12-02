import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UserService} from '../../services/user.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book = {};
  
  Form: FormGroup;
  constructor( private router: Router,private route: ActivatedRoute, private api: ApiService, private userapi:UserService ) { }
  getCompanyDetails(id) {
    this.api.getCompany(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  getUsers(id) {
    this.userapi.getusersofcompany(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  deleteBook(id) {
    this.api.deleteCompany(id)
      .subscribe(res => {
          this.router.navigate(['/companies']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  ngOnInit() {
    this.getCompanyDetails(this.route.snapshot.params['id']);
    this.getUsers(this.route.snapshot.params['id']);
    this.Form =  new FormGroup({});
  }

}
