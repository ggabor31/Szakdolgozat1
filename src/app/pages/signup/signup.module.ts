import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'; // Flex Layout modul importálása
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SignupModule { }
