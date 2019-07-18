import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, Routes, RouterModule } from '@angular/router'

const routes : Routes =[
  {
    path:'',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [
    CommonModule
    ,RouterModule.forChild(routes) 
  ],
  declarations: [DashboardComponent]
})
export class HomeModule { }  
 