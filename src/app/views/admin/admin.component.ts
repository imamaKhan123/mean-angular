import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
      width: '80px'
        
      })),
      state('final', style({
        
        width: '217px',
       
      })), 
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('2000ms'))
    ]),
  ]
})
export class AdminComponent implements OnInit {
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  constructor(private _user:UserService, private _router:Router) {}

  ngOnInit() {

  }
  logout(){
    this._user.logout();
  }

}
