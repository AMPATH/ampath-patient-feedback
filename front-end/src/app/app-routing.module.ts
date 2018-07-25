import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClinicTypeComponent } from './clinic-type/clinic-type.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';

// TODO: add a 404 error page for incorrect urls

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'success', component: SuccessComponent
  },
  {
    path: 'location', component: LocationsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'clinic/:location', component: ClinicTypeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'survey', component: QuestionnaireComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
