import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}
}
