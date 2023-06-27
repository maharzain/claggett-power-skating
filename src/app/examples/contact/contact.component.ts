import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy(){
  
  }
  submitForm() {
    // Process the form data here (e.g., send an HTTP request)
    console.log(this.formData);
    // Reset the form after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
