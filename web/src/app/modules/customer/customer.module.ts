import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Route, Routes, RouterModule } from '@angular/router';
 const routes : Routes=[
   {
     path:'customer-list',
     component: CustomerListComponent
   }
 ]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomerModule { }
