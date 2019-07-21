import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { FilterdataPipe } from './filter/filterdata.pipe';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star/star.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { SearchTextPipe } from './search-text.pipe';
import { environment } from 'src/environments/environment';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseListComponent,
    FilterdataPipe,
    StarComponent,
    HeaderComponent,
    SearchTextPipe,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
