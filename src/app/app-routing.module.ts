import { ContactusComponent } from './contactus/contactus.component';
import { GreencalComponent } from './greencal/greencal.component';
import { ErkelcalComponent } from './erkelcal/erkelcal.component';
import { WhitecalComponent } from './whitecal/whitecal.component';
import { BlackcalComponent } from './blackcal/blackcal.component';
import { BleucalComponent } from './bleucal/bleucal.component';
import { SurveyComponent } from './survey/survey.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EducationComponent } from './education/education.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'advisors', component: AdvisorsComponent},
  { path: 'education', component: EducationComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: "userprofile", component : UserProfileComponent },
  { path: 'survey', component : SurveyComponent },
  { path: 'bleucal', component : BleucalComponent},
  { path: 'blackcal', component : BlackcalComponent},
  { path: 'whitecal', component : WhitecalComponent},
  { path: 'erkelcal', component : ErkelcalComponent},
  {path: 'greencal', component : GreencalComponent},
  {path: 'contactus', component : ContactusComponent},
  {path: 'survey', component : SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
