import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  data = [
    {
      'name': "person 1",
      'age': "32",
      'email': "person1@gmail.com"
    },
    {
      'name': "person 2",
      'age': "33",
      'email': "person2@gmail.com"
    },
    {
      'name': "person 3",
      'age': "34",
      'email': "person3@gmail.com"
    }
  ];

  userForm;
  constructor(){
    this.userForm = new FormGroup({
      'name': new FormControl(),
      'age': new FormControl(),
      'email': new FormControl()
    });
  }

  formSubmit(){
    this.data.push(this.userForm.value);
  }

}
