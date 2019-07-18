import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoleComponent } from './employee-role/employee-role.component';
import { Router, Routes, RouterModule } from '@angular/router'

const routes : Routes=[
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'employee-role', 
    component:EmployeeRoleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),   
    CommonModule
  ],
  declarations: [EmployeeRoleComponent,EmployeeListComponent]
})
export class EmployeeModule { }

