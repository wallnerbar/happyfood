import {Component, OnInit} from '@angular/core';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserProfile} from '../api/profile';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profile: UserProfile;
  profileForm;
  shouldNavigateToList: boolean;

  constructor(private http: HttpClient, private userService: UserService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      'id': new FormControl(),
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl(),
      'gender': new FormControl(),
      'description': new FormControl(),
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(id)
        .subscribe((response) => {
          this.profileForm.setValue(response);
        });
    } else {
      this.profileForm.setValue({});
    }
  }

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
  }

  saveProfile() {
    const profile = this.profileForm.value;
    if (profile.id) {
      this.userService.update(profile)
        .subscribe((response) => {
          alert('updated successfully');
          this.profileForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.userService.create(profile)
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
