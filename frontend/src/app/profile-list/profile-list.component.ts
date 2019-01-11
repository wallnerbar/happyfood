import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserProfile} from '../api/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  profiles: Array<UserProfile>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.userService.getAll()
      .subscribe((profiles: any) => {
        this.profiles = profiles;
      });

  }

  deleteProfile(profile: UserProfile) {

    this.userService.delete(profile)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createProfile() {
    this.router.navigate(['/profile-form']);
  }

}
