import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { StudentService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  private student: Student  = new Student();

  constructor(private studentService: StudentService, private route: ActivatedRoute){}

  ngOnInit(): void {
    let studentId = Number(this.route.snapshot.paramMap.get('id'))
    this.student = this.studentService.getById(studentId)
  }
}
