import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

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

  remoteData;

  userForm;

  constructor(private http:HttpClient){

    this.userForm = new FormGroup({
      'name': new FormControl(),
      'age': new FormControl(),
      'email': new FormControl()
    });

    this.http.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/users").toPromise().then(
    (response)=>{
      this.remoteData = response;
      console.log(this.remoteData[0]);
    },(error)=>{
      console.log(error);
    });

  }

  formSubmit(){
    this.data.push(this.userForm.value);
  }

}
