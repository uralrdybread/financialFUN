import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisclosureComponent } from './disclosure/disclosure.component';

import { ConsultantViewComponent } from './consultant-view/consultant-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './Service/user.service';
import { SurveyComponent } from './survey/survey.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { BleucalComponent } from './bleucal/bleucal.component';
import { BlackcalComponent } from './blackcal/blackcal.component';
import { WhitecalComponent } from './whitecal/whitecal.component';
import { ErkelcalComponent } from './erkelcal/erkelcal.component';
import { GreencalComponent } from './greencal/greencal.component';
import { MatDividerModule } from '@angular/material/divider';
import { ContactusComponent } from './contactus/contactus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdvisorsComponent,
    EducationComponent,
    HeaderComponent,
    AboutusComponent,
    FooterComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
    DisclosureComponent,
    ConsultantViewComponent,
    UserProfileComponent,
    SurveyComponent,
    BleucalComponent,
    BlackcalComponent,
    WhitecalComponent,
    ErkelcalComponent,
    GreencalComponent,
    ContactusComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDividerModule,
    NgxPaginationModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],



  providers: [
    ScreenTrackingService,UserTrackingService,[UserService]
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
