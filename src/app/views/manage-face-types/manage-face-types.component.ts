import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import {
  Renderer2,
  Directive,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
import { MatSpinner } from "@angular/material";
@Component({
  selector: 'app-manage-face-types',
  templateUrl: './manage-face-types.component.html',
  styleUrls: ['./manage-face-types.component.scss']
})

export class ManageFaceTypesComponent implements OnInit {

  constructor() {
    
   }


  ngOnInit() {
    
  }

}
