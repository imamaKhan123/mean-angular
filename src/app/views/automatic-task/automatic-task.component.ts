import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { OrdersComponent } from '../orders/orders.component';
import { FilterCustomerRecordsComponent } from '../filter-customer-records/filter-customer-records.component';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';


@Component({
  selector: 'app-automatic-task',
  templateUrl: './automatic-task.component.html',
  styleUrls: ['./automatic-task.component.scss']
})

export class AutomaticTaskComponent implements OnInit {
selectedType: String="";
selectedType1: String="";
selectedType2: String="";
selectedType3: String="";
selectedType4: String="";
toogle : Boolean=false;
toogle1 : Boolean=false;
toogle2 : Boolean=false;
toogle3 : Boolean=false;
toogle4 : Boolean=false;
Form: FormGroup;
private values = [
  {
     key:"key1",
     value:"Fixed Task"
  },
  {
     key:"key2",
     value:"Group of Task"
  }
];

  constructor( private dialog: MatDialog,private formBuilder: FormBuilder) {
    if(this.selectedType==="fixed task"){
      console.log("yes");
      this.toogle = true;
      
    }
   }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      'type' : [null],
      'type1' : [null],
      'type2' : [null],
      'type3' : [null],
      'type4' : [null],
      'name' : [null]
    });
  }
  onTypeChange(value){
    console.log(value);
    if(!(value==="fixed task")){
      console.log("yes");
      this.toogle = false;
      
    }
    else{ this.toogle = true;}
  }
  onType1Change(value){
    console.log(value);
    if(!(value==="return_as_per")){
      console.log("yes");
      this.toogle1 = false;
      
    }
    else{ this.toogle1 = true;
    }
  }
onCreate(){
  console.log("ksduifhiud");
  const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="60%";
  dialogConfig.height="82%";
  this.dialog.open(FilterCustomerRecordsComponent, dialogConfig);
}
}
