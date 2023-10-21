import { Injectable } from '@angular/core';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList = new Array<Student>();
  private idStudent = 0;

  constructor() { }

  add(student: Student){
    this.idStudent ++;
    student.studentId = this.idStudent;
    this.studentList.push(student);
  }

  getAll(){return this.studentList;}

  getById(studentId: Number){
    let student = this.studentList.filter(student => {
      return student.studentId == studentId;
    })
    return (student.length > 0) ? student[0] : new Student
  }
}
