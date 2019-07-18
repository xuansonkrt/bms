import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './layouts/content/content.component';
import { LoginComponent } from './modules/login/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'', 
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
    path: ''
    , component: ContentComponent
    , children: [ 
      {
        path: 'dashboard',
        loadChildren: './modules/home/home.module#HomeModule'
      }
    ] 
  },
  {     
    path: 'employee' 
    , component: ContentComponent
    , children: [
      {
        path: '',
        loadChildren: './modules/employee/employee.module#EmployeeModule'
      }
    ]
  },
  {
    path:'customer',
    component: ContentComponent,
    children:[
      {
        path:'',
        loadChildren:'./modules/customer/customer.module#CustomerModule' 
      }
    ]
  }
]; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
