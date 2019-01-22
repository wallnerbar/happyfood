import {Component, OnInit} from '@angular/core';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {UserService} from '../user.service';
import {ProfileService} from '../profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Profile} from '../api/profile';
import {HttpClient} from '@angular/common/http';
import {User} from '../api/user';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  providers: [DatePipe]
})
export class ProfileFormComponent implements OnInit {

  profileForm;
  shouldNavigateToList: boolean;
  profileOptions;
  user: User;

  constructor(private http: HttpClient, private profileService: ProfileService,
              private route: ActivatedRoute, private router: Router,  private datePipe: DatePipe) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      'id': new FormControl(),
      'username': new FormControl(),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(),
      'dayOfBirth': new FormControl(),
      'gender': new FormControl(),
      'description': new FormControl(),
    });

    const data = this.route.snapshot.data;
    this.user = data.user;

    this.profileService.getById(this.user.id)
      .subscribe((userProfile: any) => {
        const profile = userProfile;
        profile.dayOfBirth = this.datePipe.transform(profile.dayOfBirth, 'yyyy-MM-dd');
        this.profileForm.setValue(profile);
      });
  }
  saveUser() {
    const user = this.profileForm.value;
    this.profileService.update(user)
      .subscribe((response) => {
        alert('updated successfully');
        this.navigateBack();
      });
  }

  navigateBack() {
    this.router.navigate(['/profile']);
  }

  navigateToList() {
    this.router.navigate(['/profile-list']);
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }


}
