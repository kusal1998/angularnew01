import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user = null;
  userId= '';
  message = '';

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.user = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status): void {
    const data = {
      title: this.user.title,
      description: this.user.description,
      published: status
    };

    this.userService.update(this.user.userId, data)
    .subscribe(
      response => {
        this.user.published = status;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  updateTutorial(): void {
    this.userService.update(this.user.userId, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The User was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteTutorial(): void {
    this.userService.delete(this.user.userId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }

}
