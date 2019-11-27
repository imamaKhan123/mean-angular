import { Component, OnInit , ViewChild} from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
  displayedColumns = ['name' ];
dataSource = new BookDataSource(this.api);

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.api.getCompanies()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
      this.dataSource.paginator = this.paginator;
  }

}
export class BookDataSource extends DataSource<any> {
  paginator: MatPaginator;
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getCompanies();
  }

  disconnect() {

  }
}