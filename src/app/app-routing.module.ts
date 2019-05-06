import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeResolverService } from './recipes/resolvers/recipe-resolver.service';
import { RecipesComponent } from './recipes/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      recipes: RecipeResolverService
    },
    component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
