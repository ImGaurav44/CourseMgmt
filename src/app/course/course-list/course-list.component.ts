import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { timeout } from 'q';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses:any;
  showimage:boolean =true;
  limit = [2,5,10,20,100,200];
  selectedValue:any = 3;
  message:string;

constructor(private courseService : CourseService) { }



  ngOnInit() {
    this.getcourses();
    this.togglImage();
  }

  ChangingValue(value)
  {
    this.selectedValue =value;
    return this.selectedValue;
  }
  togglImage()
  {
    this.showimage = !this.showimage;
  }

  startClick(event)
  {
    this.message = event;
    setTimeout(() => {
      this.message = null
    }, 3000);
  }

  getcourses()
  {
   this.courseService.getCourses()
          .subscribe(
            response => {
              this.courses = response;
              console.log(response)
            },
            error => console.log(error)
          )
  }

}
