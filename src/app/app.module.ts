import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AddRolesService} from './services/add-roles.service';
import { AddusersService} from './services/addusers.service';
import { AddSubCompUserRolesService} from './services/add-sub-comp-user-roles.service';
import { AppComponent } from './app.component';
import { BookComponent } from './views/companies/book.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';
import { BookCreateComponent } from './views/book-create/book-create.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';
import { ProductsComponent } from './views/products/products.component';
import { HomeComponent } from './views/home/home.component';
import { AddUsersComponent } from './views/add-users/add-users.component';
import { AddAccountComponent } from './views/add-account/add-account.component';
import { UsersearchComponent } from './views/usersearch/usersearch.component';
import { InquireiesComponent } from './views/inquireies/inquireies.component';
import { ManageAccountComponent } from './views/manage-account/manage-account.component';
import { ManageAccountTypesComponent } from './views/manage-account-types/manage-account-types.component';
import { NewAccountTypeComponent } from './views/new-account-type/new-account-type.component';
import { DataConnectionComponent } from './views/data-connection/data-connection.component';
import { ManageModulesComponent } from './views/manage-modules/manage-modules.component';
import { NewUserComponent } from './views/new-user/new-user.component';
import { AccountSearchComponent } from './views/account-search/account-search.component';
import { TypeOfInquiryComponent } from './views/type-of-inquiry/type-of-inquiry.component';
import { AddNewAccountComponent } from './views/add-new-account/add-new-account.component';
import { AddNewFaceComponent } from './views/add-new-face/add-new-face.component';
import { ManageFaceTypesComponent } from './views/manage-face-types/manage-face-types.component';
import { ProcedureForFaceComponent } from './views/procedure-for-face/procedure-for-face.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './views/account-details/account-details.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ManageFaceTypeComponent } from './views/manage-face-type/manage-face-type.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ManageClientsComponent } from './views/manage-clients/manage-clients.component';
import { AddClentsComponent } from './views/add-clents/add-clents.component';
import { EditClentsComponent } from './views/edit-clents/edit-clents.component';
import { ShowClentsComponent } from './views/show-clents/show-clents.component';
import {DataTableModule} from "angular-6-datatable";
import { AngularSlickgridModule } from 'angular-slickgrid';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authguard.guard';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatBadgeModule,
  MatSelectModule,
  MatCheckboxModule,
  MatFormFieldModule } from "@angular/material";
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { BookEditComponent } from './views/book-edit/book-edit.component';
import { SettingsComponent } from './views/settings/settings.component';
import { OrdersComponent } from './views/orders/orders.component';
import { CustomersComponent } from './views/customers/customers.component';
import { AddCustomersComponent } from './views/add-customers/add-customers.component';
import { CallLogComponent } from './views/call-log/call-log.component';
import { SmsComponent } from './views/sms/sms.component';
import { EmailComponent } from './views/email/email.component';
import { ManageClientTypesComponent } from './views/manage-client-types/manage-client-types.component';
import { ManageReportTypesComponent } from './views/manage-report-types/manage-report-types.component';
import { ListOfReportsComponent } from './views/list-of-reports/list-of-reports.component';
import { ManageCustomersComponent } from './views/manage-customers/manage-customers.component';
import { SetupProductReportComponent } from './views/setup-product-report/setup-product-report.component';
import { AddRolesComponent } from './views/add-roles/add-roles.component';
import { AddSubCompRolesComponent } from './views/add-sub-comp-roles/add-sub-comp-roles.component';
import { CompanyTemplateComponent } from './views/company-template/company-template.component';
import { AddSubCompUserComponent } from './views/add-sub-comp-user/add-sub-comp-user.component';
import {  UniqueEmailValidatorDirective } from './views/unique-email-validatior.directive';

const appRoutes: Routes = [
  {
    path: 'companies',
    
    children: [
      { path: '',  component: BookComponent ,pathMatch: 'full' },
      { path: 'company-create', component: BookCreateComponent    },
      { path: 'company-details/:id', component: BookDetailComponent },
     
    ]
  
  },
 
 
  { path: 'company-edit/:id', component: BookEditComponent   },
  { path: '', component: LoginComponent },
  {path: 'users',
  children: [
    { path: '',  component: UsersComponent,pathMatch: 'full' },
    { path: 'addusers', component: AddUsersComponent }
  ]
} ,
  { path: 'products', component: ProductsComponent },
  { path: 'add-roles', component: AddRolesComponent },
  { path: 'add-subCompUserRoles', component: AddSubCompRolesComponent },
  { path: 'Add-CompanyTemplate', component: CompanyTemplateComponent },
  { path: 'setup-product-report', component: SetupProductReportComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-account', component: AddAccountComponent },
 { path: 'addusers' , component: AddUsersComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'usersearch', component:UsersearchComponent  },
  { path: 'accounts', component: AccountSearchComponent  },
  { path: 'account-details', component:AccountDetailsComponent },
  { path: 'payments', component:PaymentsComponent },
  { path: 'inquiries', component: InquireiesComponent },
  { path: 'manage-account', component: ManageAccountComponent },
  { path: 'manage-account-types', component: ManageAccountTypesComponent },
  { path: 'add-new-face', component: AddNewFaceComponent},
  { path: 'manage-face-type', component: ManageFaceTypeComponent},
  { path: 'manage-face-types', component: ManageFaceTypesComponent},
  { path: 'procedure-for-face', component: ProcedureForFaceComponent},
  { path: 'new-account-type', component: NewAccountTypeComponent},
  { path: 'data-connection', component: DataConnectionComponent},
  { path: 'manage-modules', component: ManageModulesComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'add-sub-comp-user', component: AddSubCompUserComponent},
  { path: 'type-of-inquiry', component: TypeOfInquiryComponent},
  { path: 'add-new-account', component: AddNewAccountComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'add-clients', component: AddClentsComponent},
  { path: 'add-customers', component: AddCustomersComponent},
  { path: 'call-log', component: CallLogComponent},
  { path: 'sms', component: SmsComponent},
  { path: 'manage-clients', component: ManageClientsComponent},
  { path: 'manage-customers', component: ManageCustomersComponent},
  { path: 'manage-client-types', component: ManageClientTypesComponent},
  { path: 'manage-report-types', component: ManageReportTypesComponent},
  { path: 'list-of-reports', component: ListOfReportsComponent},
  { path: 'register', component: RegisterComponent}
];
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    AddUsersComponent,
    AddAccountComponent,
    UsersearchComponent,
    InquireiesComponent,
    ManageAccountComponent,
    ManageAccountTypesComponent,
    NewAccountTypeComponent,
    DataConnectionComponent,
    ManageModulesComponent,
    NewUserComponent,
    AccountSearchComponent,
    TypeOfInquiryComponent,
    AddNewAccountComponent,
    AddNewFaceComponent,
    ManageFaceTypesComponent,
    ProcedureForFaceComponent,
    AccountDetailsComponent,
    PaymentsComponent,
    ManageFaceTypeComponent,
    ClientsComponent,
    ManageClientsComponent,
    AddClentsComponent,
    EditClentsComponent,
    ShowClentsComponent,
    SettingsComponent,
    OrdersComponent,
    CustomersComponent,
    AddCustomersComponent,
    CallLogComponent,
    SmsComponent,
    EmailComponent,
    ManageClientTypesComponent,
    ManageReportTypesComponent,
    ListOfReportsComponent,
    ManageCustomersComponent,
    SetupProductReportComponent,
    AddRolesComponent,
    AddSubCompRolesComponent,
    CompanyTemplateComponent,
    AddSubCompUserComponent,
    UniqueEmailValidatorDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularSlickgridModule.forRoot(),
    MatSidenavModule,
    DataTableModule,
    MatBadgeModule,
    MatSelectModule,
    MatCheckboxModule,
  BrowserModule,
  MDBBootstrapModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatRadioModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,BrowserAnimationsModule,
  BsDropdownModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot(),
  JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost:3000'],
      blacklistedRoutes: ['localhost:3000/user/auth']
    }
  })
  ],
  providers: [
    ApiService,
    UserService,
    AddRolesService,
    AuthService,
    AddusersService,
    AddSubCompUserRolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
