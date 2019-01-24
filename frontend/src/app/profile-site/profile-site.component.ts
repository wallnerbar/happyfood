import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../profile.service';
import {Profile} from '../api/profile';

@Component({
  selector: 'app-profile-site',
  templateUrl: './profile-site.component.html',
  styleUrls: ['./profile-site.component.scss']
})
export class ProfileSiteComponent implements OnInit {

  profile: Profile;

  constructor(private http: HttpClient, private profileService: ProfileService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    /*const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getById(id)
        .subscribe((response: any) => {
          this.profile = response;
        });
    }*/
  }

}
