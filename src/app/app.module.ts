import { ApplicantAuthguardService } from './services/applicant-authguard.service';
import { AuthenticateAdminService } from './services/authenticate-admin.service';
import { AddActivityComponent } from './activity/add-activity/add-activity.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LevelComponent } from './level/level.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddLevelComponent } from './level/add-level/add-level.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from "src/app/home/main/main.component";
import { ShowLevelComponent } from './level/show-level/show-level.component';
import { ActivityComponent } from './activity/activity.component';
import { ShowActivityComponent } from './activity/show-activity/show-activity.component';
import { BatchComponent } from './batch/batch.component';
import { ShowBatchComponent } from './batch/show-batch/show-batch.component';
import { AddBatchComponent } from './batch/add-batch/add-batch.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ShowApplicantComponent } from './applicant/show-applicant/show-applicant.component';
import { AddApplicantComponent } from './applicant/add-applicant/add-applicant.component';
import { EditLevelComponent } from './level/edit-level/edit-level.component';
import { SideNavBarComponent } from './home/side-nav-bar/side-nav-bar.component';
import { EditBatchComponent } from './batch/edit-batch/edit-batch.component';
import { EditActivityComponent } from './activity/edit-activity/edit-activity.component';
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { ApplicantSideNavBarComponent } from './applicant/applicant-side-nav-bar/applicant-side-nav-bar.component';
import { UserProfileComponent } from './applicant/user-profile/user-profile.component';
import { ApplicantActivitiesComponent } from './applicant/applicant-activities/applicant-activities.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EnrolledActivitiesComponent } from './applicant/enrolled-activities/enrolled-activities.component';
import { ErrorComponent } from './error/error.component';
import { AdminAuthguardService } from "src/app/services/admin-authguard.service";
import { AboutComponent } from './about/about.component';
import { EnrolledActivityDetailsComponent } from './enrolled-activity-details/enrolled-activity-details.component';
import { CommentsComponent } from './comments/comments.component';
import { ApplicantActivitiesAdminViewComponent } from './applicant-activities-admin-view/applicant-activities-admin-view.component';
import { ChartsModule } from 'ng2-charts';
import { ActivityGraphComponent } from './activity/activity-graph/activity-graph.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LevelComponent,
    SidebarComponent,
    MainComponent,
    AddLevelComponent,
    ShowLevelComponent,
    ActivityComponent,
    ShowActivityComponent,
    AddActivityComponent,
    BatchComponent,
    ShowBatchComponent,
    AddBatchComponent,
    ApplicantComponent,
    ShowApplicantComponent,
    AddApplicantComponent,
    EditLevelComponent,
    SideNavBarComponent,
    EditBatchComponent,
    EditActivityComponent,
    ApplicantProfileComponent,
    ApplicantSideNavBarComponent,
    UserProfileComponent,
    ApplicantActivitiesComponent,
    EnrolledActivitiesComponent,
    ErrorComponent,
    AboutComponent,
    EnrolledActivityDetailsComponent,
    CommentsComponent,
    ApplicantActivitiesAdminViewComponent,
    ActivityGraphComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticateAdminService, AdminAuthguardService, ApplicantAuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }