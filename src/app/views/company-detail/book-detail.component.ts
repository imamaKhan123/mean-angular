import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book = {};
  constructor(private route: ActivatedRoute, private api: ApiService,private router: Router) { }
  getBookDetails(id) {
    this.api.getCompany(id)
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
    this.getBookDetails(this.route.snapshot.params['id']);
  }

}
