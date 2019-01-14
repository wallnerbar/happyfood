import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AuthGuard} from './auth.guard';
import {TestListComponent} from './test-list/test-list.component';
import {ProfileFormComponent} from './profile-form/profile-form.component';
import {ProfileListComponent} from './profile-list/profile-list.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile-list', pathMatch: 'full'},
  {path: 'profiles', component: ProfileFormComponent},
  {path: 'test-list', component: TestListComponent, canActivate: [AuthGuard]},
  {path: 'profile-list', component: ProfileListComponent, canActivate: [AuthGuard]},
  {path: 'profile-form', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'profile-form/:id', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-form', component: RecipeFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-form/:id', component: RecipeFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-list', component: RecipeListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
