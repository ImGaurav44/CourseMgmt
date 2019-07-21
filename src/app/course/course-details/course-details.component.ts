import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course;
  courseId;
  courseName;

  constructor(private courseService:CourseService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
                                  response => {
                                    let id = response.get('id');
                                    this.getCourse(id);
                                  }
    )
                                
  }

  getCourse(id)
  {
    this.courseService.getCourse(id).subscribe
                                        (
                                          response =>{
                                            this.course = response.payload.val();
                                            this.courseId = response.payload.key;
                                           
                                            console.log('response',this.course);
                                          },
                                          error =>
                                          {
                                            console.log(error);
                                          }
                                        )
  }
  
}
