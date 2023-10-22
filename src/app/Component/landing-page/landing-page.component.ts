import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  private userName = "user"
  private Password = "pass"
  
  message: string = ""
  username: string = ""
  password: string = ""

  ngOnInit(): void {
    
  }

  constructor(private router: Router){}

  logIn(){

    console.log(this.username);
    

    if(this.userName == this.username && this.Password == this.password){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['']);
      this.message = "User or password incorrect"
    }
  }



}
