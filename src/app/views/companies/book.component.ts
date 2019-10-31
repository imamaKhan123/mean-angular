import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent implements OnInit {

  constructor(private api: ApiService) { }
  books: any;
  displayedColumns = ['companyID' ];
dataSource = new BookDataSource(this.api);


  
  ngOnInit() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }

}
export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}