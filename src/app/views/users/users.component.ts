import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute , Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  paginator: MatPaginator;
  constructor(private api: UserService,private router: Router) { }
  books: any;
  displayedColumns = ['companyID','companyName', 'companyPhone' ];
dataSource = new BookDataSource(this.api);
  ngOnInit() {
    this.api.getUsers()
    .subscribe(res => {
      console.log(res);
      this.books = res;
    }, err => {
      console.log(err);
    });
    this.dataSource.paginator = this.paginator; 
  }
 
  deleteUser(id) {
    this.api.deleteUser(id)
      .subscribe(res => {
          console.log("user deleted");
          this.router.navigate(['/users']);

        }, (err) => {
          console.log(err);
        }
      );
  }
}
export class BookDataSource extends DataSource<any> {
  paginator: MatPaginator;
  constructor(private api: UserService) {
    super()
  }

  connect() {
    return this.api.getUsers();
  }

  disconnect() {

  }
}
