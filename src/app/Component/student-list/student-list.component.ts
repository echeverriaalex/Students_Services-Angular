import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentAsyncService } from 'src/app/Services/student-async.service';
import { StudentService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  studentList = Array<Student>();

  constructor(private studentService: StudentService, 
              private studentAsyncService: StudentAsyncService    
  ){}

  ngOnInit(): void {    
    // Forma sincronica todo local
     //this.studentList = this.studentService.getAll();

    // Forma async con APi
    
    this.studentAsyncService.getAll()
      .then(response => {
        this.studentList = response;
      })
      .catch(error =>{
        console.log(error);        
      })
    
  }
}
