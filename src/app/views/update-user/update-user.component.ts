import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddRolesService } from '../../services/add-roles.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { CompanyTemplateService } from '../../services/company-template.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  bookForm: any;
  constructor(private router: Router,  private route: ActivatedRoute,
    private api: AddRolesService,private UserApi: UserService,private CT: CompanyTemplateService, 
     private Com: ApiService, private formBuilder: FormBuilder) { }
  id : String='';


  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }
  getUser(id) {
    this.UserApi.getUser(id).subscribe(data => {
      this.id = data._id;
      this.bookForm.setValue({
        isbn: data.companyID,
        title: data.companyName,
        description: data.companyEmail,
        author: data.companyAddress,
        publisher: data.companyDescription,
        published_year:data.companyPhone 
      });
    });
  } 

}
