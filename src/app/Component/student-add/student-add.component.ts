import { Component } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  studentId!: Number;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  dni!: Number;
  address: string = "";

}
