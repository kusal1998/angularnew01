import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  users = {
    username:'',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: '',
    avatarUrl: '',
    joinedDate: '',
    primaryContactNumber: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    district: '',


    published: false
  };
  submitted = false
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {

      username: this.users.username,
      firstName: this.users.firstName,
      lastName: this.users.lastName,
      birthDate: this.users.birthDate,
      email: this.users.email,
      password: this.users.password,
      avatarUrl: this.users.avatarUrl,
      joinedDate: this.users.joinedDate,
      primaryContactNumber: this.users.primaryContactNumber,
      addressLine1: this.users.addressLine1,
      addressLine2: this.users.addressLine2,
      town: this.users.town,
      district: this.users.district,



    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.users = {
      
      username: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
      password: '',
      avatarUrl: '',
      joinedDate: '',
      primaryContactNumber: '',
      addressLine1: '',
      addressLine2: '',
      town: '',
      district: '',
      published: false
    };
  }
}
