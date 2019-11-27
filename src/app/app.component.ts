import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent {
  title = 'mean-angular6';
  currentState = 'initial';
  companies:any;
  constructor(private _companies:ApiService) {}
  ngOnInit() {
    this._companies.getCompanies()
    .subscribe(res => {
      console.log(res);
      this.companies = res.length;
      console.log(this.companies );
    }, err => {
      console.log(err);
    });

  }
changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}
}
