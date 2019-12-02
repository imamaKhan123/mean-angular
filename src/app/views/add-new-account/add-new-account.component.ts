import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.scss']
})
export class AddNewAccountComponent implements OnInit {

  constructor(private _location : Location) { }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }
}
