import {Component, OnInit} from '@angular/core';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {UserService} from '../user.service';
import {ProfileService} from '../profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Profile} from '../api/profile';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm;
  shouldNavigateToList: boolean;
  profileOptions;

  constructor(private http: HttpClient, private profileService: ProfileService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      'id': new FormControl(),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(),
      'gender': new FormControl(),
      'description': new FormControl(),
      'pictures': new FormControl(),
    });

    const data = this.route.snapshot.data;
    this.profileOptions = data.profile;
    /*const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getById(id)
        .subscribe((response) => {
          this.profileForm.setValue(response);
        });
    } else {
      this.profileForm.setValue();
    }*/
  }
/*
  createProfile() {

    if (this.profile.id) {
      this.http.put('/api/profiles/' + this.profile.id, this.profile)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.http.post('/api/profiles', this.profile)
        .subscribe(() => {
          alert('created successfully');
        });
    }
  }*/

  saveProfile() {
    const profile = this.profileForm.value;
    if (profile.id) {
      this.profileService.update(profile)
        .subscribe((response) => {
          alert('updated successfully');
          this.profileForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.profileService.create(profile)
        .subscribe((response: any) => {
          alert('created successfully');
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/profile-form', response.id]);
          }
        });
    }
  }

  navigateToList() {
    this.router.navigate(['/profile-list']);
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }


}
