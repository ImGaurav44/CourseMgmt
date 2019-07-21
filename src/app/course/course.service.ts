import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url:string = "https://raw.githubusercontent.com/Swadreams/July-2019/courses-data/courses.json";

  constructor(private http:HttpClient, private db:AngularFireDatabase) { }
  getCourses()
  {
    return this.http.get(this.url);
  }

   getCoursesFromFromFireBase()
   {
     return this.db.list('/courses').snapshotChanges(); //snapshot for reflect data
     /**
      * .subscribe()
      */
   }

   getCourse(id)
   {
     return this.db.object(`/courses/${id}`).snapshotChanges();
   }
}
