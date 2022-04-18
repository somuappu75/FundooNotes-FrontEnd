import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchieveComponent } from './Components/archieve/archieve.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children: [
    {path:'getallnotes', component: GetallnotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archieve',component:ArchieveComponent}
  ]
}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
