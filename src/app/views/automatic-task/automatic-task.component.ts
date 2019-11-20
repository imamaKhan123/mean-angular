import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { OrdersComponent } from '../orders/orders.component';
import { SettingsComponent } from '../settings/settings.component';
@Component({
  selector: 'app-automatic-task',
  templateUrl: './automatic-task.component.html',
  styleUrls: ['./automatic-task.component.scss']
})
export class AutomaticTaskComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
  }
onCreate(){
  console.log("ksduifhiud");
  const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="60%";
  dialogConfig.height="50%";
  this.dialog.open(SettingsComponent, dialogConfig);
}
}
