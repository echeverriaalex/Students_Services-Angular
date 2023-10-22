import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { StudentAsyncService } from 'src/app/Services/student-async.service';
import { StudentService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit{

  studentId!: Number;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  dni!: Number;
  address: string = "";

  message: string = "";

  constructor(private studentService: StudentService, private studentAsyncServeice: StudentAsyncService){}

  ngOnInit(): void {
    
  }

  addStudent(){
    
    let student = new Student()
    student.studentId = this.studentId;
    student.firstName = this.firstName;
    student.lastName = this.lastName;
    student.email = this.email;
    student.dni = this.dni;
    student.address = this.address;

    // Registrar un student en un array local
    //this.studentService.add(student);
    //console.log(this.studentService.getAll());

    // Registrar un student en una api
    this.studentAsyncServeice.add(student);
    
    this.message = "Student registered"
    //alert("Student registered")
  }

}
