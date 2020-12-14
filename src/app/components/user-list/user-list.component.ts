import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;
  currentUser = null;
  currentIndex = -1;
  firstName = '';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        response => {
          this.users = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index): void {
    this.currentUser = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.userService.findByTitle(this.firstName)
      .subscribe(
        data => {
          this.users = data.data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
