import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.userProfileService.getAll()
      .subscribe((actors: any) => {
        this.actors = actors;
      });

  }

  deleteActor(actor: Actor) {

    this.actorService.delete(actor)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

  createActor() {
    this.router.navigate(['/actor-form']);
  }

}
