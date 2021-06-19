import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getSignUp(form:{firstname:string, lastname:string, email:string, password:string}):void{
    console.log("First Name: ", form.firstname);
    console.log("Last Name: ", form.lastname);
    console.log("Email: ", form.email);
    console.log("Password: ", form.password);
  }
}
