import { Component, OnInit } from '@angular/core';
import {Profile} from '../api/profile';
import {Router} from '@angular/router';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  profiles: Array<Profile>;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {

    this.profileService.getAll()
      .subscribe((response: any) => {
        this.profiles = response._embedded.profiles;
      });

  }


  deleteProfile(profile: Profile) {

    this.profileService.delete(profile)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createProfile() {
    this.router.navigate(['/profile-form']);
  }

}
