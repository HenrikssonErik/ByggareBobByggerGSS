import { Component, OnInit } from '@angular/core';
import { EmailValidator, RequiredValidator } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  constructor() {}

  name: string;
  message: string;
  email: string;

  ngOnInit(): void {}

  sendEmail() {
    axios({
      method: 'post',
      url: 'http://localhost:8080/contactform/send',
      data: {
        name: this.name,
        email: this.email,
        message: this.message,
      },
    });
  }

  redirectOnSubmit() {}
}
