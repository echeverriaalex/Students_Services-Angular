import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{

  ngOnInit(): void {
    //let studentId = Number(this.route.snapshot.paramMap.get('id'))
    //this.student = this.studentService.getById(studentId)
  }

}
