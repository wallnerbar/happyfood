import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AuthGuard} from './auth.guard';
import {TestListComponent} from './test-list/test-list.component';
import {ProfileFormComponent} from './profile-form/profile-form.component';
import {ProfileListComponent} from './profile-list/profile-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/test-list', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'test-list', component: TestListComponent, canActivate: [AuthGuard]},
  {path: 'profile-list', component: ProfileListComponent},
  {path: 'profile-form', component: ProfileFormComponent},
  {path: 'profile-form/:id', component: ProfileFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
