import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {User} from '../api/user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  users: Array<User>;

  constructor(private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.adminService.getAllUsers()
      .subscribe((users: any) => {
        this.users = users;
      });

    const data = this.route.snapshot.data;
    this.users = data.users;
  }

  deleteUser(user: User) {
    this.adminService.deleteUser(user.id)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
