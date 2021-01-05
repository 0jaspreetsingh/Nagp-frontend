import { ActivityGraphComponent } from './activity/activity-graph/activity-graph.component';
import { ApplicantActivitiesAdminViewComponent } from './applicant-activities-admin-view/applicant-activities-admin-view.component';
import { CommentsComponent } from './comments/comments.component';
import { EnrolledActivityDetailsComponent } from './enrolled-activity-details/enrolled-activity-details.component';
import { AboutComponent } from './about/about.component';
import { ApplicantAuthguardService } from './services/applicant-authguard.service';
import { AdminAuthguardService } from 'src/app/services/admin-authguard.service';
import { EnrolledActivitiesComponent } from './applicant/enrolled-activities/enrolled-activities.component';
import { ApplicantActivitiesComponent } from './applicant/applicant-activities/applicant-activities.component';
import { UserProfileComponent } from './applicant/user-profile/user-profile.component';
import { ApplicantSideNavBarComponent } from './applicant/applicant-side-nav-bar/applicant-side-nav-bar.component';
// import { ApplicantHomeComponent } from './applicant/applicant-home/applicant-home.component';
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { EditActivityComponent } from './activity/edit-activity/edit-activity.component';
import { EditBatchComponent } from './batch/edit-batch/edit-batch.component';
import { SideNavBarComponent } from './home/side-nav-bar/side-nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditLevelComponent } from './level/edit-level/edit-level.component';
import { AddActivityComponent } from './activity/add-activity/add-activity.component';
import { AddApplicantComponent } from './applicant/add-applicant/add-applicant.component';
import { ShowApplicantComponent } from './applicant/show-applicant/show-applicant.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AddBatchComponent } from './batch/add-batch/add-batch.component';
import { ShowBatchComponent } from './batch/show-batch/show-batch.component';
import { BatchComponent } from './batch/batch.component';
import { ShowActivityComponent } from './activity/show-activity/show-activity.component';
import { ShowLevelComponent } from './level/show-level/show-level.component';
import { AddLevelComponent } from './level/add-level/add-level.component';
import { LevelComponent } from './level/level.component';
import { MainComponent } from './home/main/main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ActivityComponent } from "src/app/activity/activity.component";

const routes: Routes = [
  { path: "demo", component: ActivityGraphComponent },
  {
    path: "home", component: SideNavBarComponent, canActivate: [ AdminAuthguardService], children: [
      { path: "", component: MainComponent },
      {
        path: "level", component: LevelComponent, children: [
          { path: "", component: ShowLevelComponent },
          { path: "addLevel", component: AddLevelComponent },
          { path: "editLevel", component: EditLevelComponent }
        ]
      },
      {
        path: "activity", component: ActivityComponent, children: [
          { path: "", component: ShowActivityComponent },
          { path: "addActivity", component: AddActivityComponent },
          { path: "editActivity", component: EditActivityComponent }
        ]
      },
      {
        path: "batch", component: BatchComponent, children: [
          { path: "", component: ShowBatchComponent },
          { path: "addBatch", component: AddBatchComponent },
          { path: "editBatch", component: EditBatchComponent }
        ]
      },
      {
        path: "applicant", component: ApplicantComponent, children: [
          { path: "", component: ShowApplicantComponent },
          { path: "addApplicant", component: AddApplicantComponent },
          {
            path: "applicantProfile", component: ApplicantActivitiesAdminViewComponent, children: [
              { path: "", redirectTo: "home/applicant/applicantProfile/applicantdetails", pathMatch: 'full' },
              { path: "applicantdetails", component: ApplicantProfileComponent },
              { path: "allActivities", component: ApplicantActivitiesComponent },
              { path: "enrolledActivities", component: EnrolledActivitiesComponent },
              {
                path: "activityDetails", component: EnrolledActivityDetailsComponent, children: [
                  { path: "", component: CommentsComponent }
                ]
              }
            ]
          },    // ApplicantProfileComponent

          // {path: "", component:ApplicantProfileComponent  children:[
          //   {path:""}
          // ]}
        ]
      }
    ]
  },
  { path: "", component: LoginComponent },
  {
    path: "applicantHome", component: ApplicantSideNavBarComponent, canActivate: [ ApplicantAuthguardService], children: [
      {
        path: "", component: UserProfileComponent, children: [
          { path: "", component: ActivityGraphComponent }
        ]
      },
      { path: "activities", component: ApplicantActivitiesComponent },
      { path: "myActivities", component: EnrolledActivitiesComponent },
      {
        path: "activityDetails", component: EnrolledActivityDetailsComponent, children: [
          { path: "", component: CommentsComponent }
        ]
      }

    ]
  },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// myActivities