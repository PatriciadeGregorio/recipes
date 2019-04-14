import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeListComponent],
  providers: [RecipeService]
})
export class RecipesModule { }
