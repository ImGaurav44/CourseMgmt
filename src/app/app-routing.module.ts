import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent },
  {path : 'course', component : CourseListComponent },
  {path : 'login', component : LoginComponent},
  {path : 'course/details/:id', component : CourseDetailsComponent},
  {path : '' , redirectTo:'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
