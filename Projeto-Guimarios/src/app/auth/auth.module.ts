import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material.module';
import { AddressComponent } from './register/address/address.component';
import { PersonalDataComponent } from './register/personal-data/personal-data.component';
import { FinishRegisterComponent } from './register/finish-register/finish-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AddressComponent,
    PersonalDataComponent,
    FinishRegisterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
