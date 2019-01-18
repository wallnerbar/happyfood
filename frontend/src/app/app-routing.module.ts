import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AuthGuard} from './auth.guard';
import {TestListComponent} from './test-list/test-list.component';
import {ProfileFormComponent} from './profile-form/profile-form.component';
import {ProfileListComponent} from './profile-list/profile-list.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {IngredientFormComponent} from './ingredient-form/ingredient-form.component';
import {IngredientListComponent} from './ingredient-list/ingredient-list.component';
import {FavoriteListComponent} from './favorite-list/favorite-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile-list', pathMatch: 'full'},
  {path: 'profiles', component: ProfileFormComponent},
  {path: 'recipes/my-favorites', component: FavoriteListComponent},
  {path: 'test-list', component: TestListComponent, canActivate: [AuthGuard]},
  {path: 'profile-list', component: ProfileListComponent, canActivate: [AuthGuard]},
  {path: 'profile-form', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'profile-form/:id', component: ProfileFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-form', component: RecipeFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-form/:id', component: RecipeFormComponent, canActivate: [AuthGuard]},
  {path: 'recipe-list', component: RecipeListComponent, canActivate: [AuthGuard]},
  {path: 'ingredient-form', component: IngredientFormComponent, canActivate: [AuthGuard]},
  {path: 'ingredient-form/:id', component: IngredientFormComponent, canActivate: [AuthGuard]},
  {path: 'ingredient-list', component: IngredientListComponent, canActivate: [AuthGuard]},
  {path: 'favorite-list', component: FavoriteListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
