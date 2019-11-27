import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './views/companies/book.component';
import { BookDetailComponent } from './views/company-detail/book-detail.component';
import { BookCreateComponent } from './views/company-create/book-create.component';
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
import { AccountDetailsComponent } from './views/account-details/account-details.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { ManageFaceTypeComponent } from './views/manage-face-type/manage-face-type.component';
import { ClientsComponent } from './views/clients/clients.component';
import { ManageClientsComponent } from './views/manage-clients/manage-clients.component';
import { AddClentsComponent } from './views/add-clents/add-clents.component';
import { EditClentsComponent } from './views/edit-clents/edit-clents.component';
import { ShowClentsComponent } from './views/show-clents/show-clents.component';
import { AuthGuard } from './services/authguard.guard';
import { BookEditComponent } from './views/company-edit/book-edit.component';
import { SettingsComponent } from './views/settings/settings.component';
import { OrdersComponent } from './views/orders/orders.component';
import { CustomersComponent } from './views/customers/customers.component';
import { AddCustomersComponent } from './views/add-customers/add-customers.component';
import { CallLogComponent } from './views/call-log/call-log.component';
import { SmsComponent } from './views/sms/sms.component';
import { EmailComponent } from './views/messages/messages.component';
import { ManageClientTypesComponent } from './views/manage-client-types/manage-client-types.component';
import { ManageReportTypesComponent } from './views/manage-report-types/manage-report-types.component';
import { ListOfReportsComponent } from './views/list-of-reports/list-of-reports.component';
import { ManageCustomersComponent } from './views/manage-customers/manage-customers.component';
import { SetupProductReportComponent } from './views/setup-product-report/setup-product-report.component';
import { AddRolesComponent } from './views/add-roles/add-roles.component';
import { AddSubCompRolesComponent } from './views/add-sub-comp-roles/add-sub-comp-roles.component';
import { CompanyTemplateComponent } from './views/company-template/company-template.component';
import { AddSubCompUserComponent } from './views/add-sub-comp-user/add-sub-comp-user.component';
import { SetTemplateComponent } from './views/set-template/set-template.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { NewTasksComponent } from './views/new-tasks/new-tasks.component';
import { AutomaticTaskComponent } from './views/automatic-task/automatic-task.component';
import { FilterCustomerRecordsComponent } from './views/filter-customer-records/filter-customer-records.component';
import { CreateSecondaryTaskComponent } from './views/create-secondary-task/create-secondary-task.component';
import { BelongsToCustomerComponent } from './views/belongs-to-customer/belongs-to-customer.component';
import { AddFileComponent } from './views/add-file/add-file.component';
import { UpdateUserComponent } from './views/update-user/update-user.component';



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
    { path: 'addusers', component: AddUsersComponent },
    { path: 'updateUser/:id', component: UpdateUserComponent }
  ]
} , { path: 'admin',component: AdminComponent} ,
  { path: 'messages',component: EmailComponent} ,
  { path: '', component: SidebarComponent, outlet: "sidebar" },
  { path: 'products', component: ProductsComponent  },
  { path: 'add-roles', component: AddRolesComponent },
  { path: 'add-subCompUserRoles', component: AddSubCompRolesComponent },
  { path: 'Add-CompanyTemplate', component: CompanyTemplateComponent },
  { path: 'setup-product-report', component: SetupProductReportComponent },
  { path: 'set-template', component: SetTemplateComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'orders', component: OrdersComponent,outlet: "sidebar" },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-account', component: AddAccountComponent },
 { path: 'addusers' , component: AddUsersComponent},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'usersearch', component:UsersearchComponent  },
  { path: 'accounts', component: AccountSearchComponent  },
  { path: 'account-details', component:AccountDetailsComponent },
  { path: 'payments', component:PaymentsComponent },
  { path: 'inquiries', component: InquireiesComponent /*,canActivate:[AuthGuard]*/ },
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
  { path: 'register', component: RegisterComponent},
  { path: 'create-new-task', component: NewTasksComponent},
  { path: 'automatic-task', component: AutomaticTaskComponent},  
  { path: 'add-file', component: AddFileComponent},  
  { path: 'secondary-task', component: CreateSecondaryTaskComponent},  
  { path: 'filter-cutomer-task', component: FilterCustomerRecordsComponent},  
  { path: 'belong-t-customer', component: BelongsToCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
