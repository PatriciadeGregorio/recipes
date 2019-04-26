import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { RecipeService } from '../services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve <Observable<RecipeResponse>> {

  constructor(private recipeService: RecipeService) { }

  resolve(): Observable<RecipeResponse> {
    return this.recipeService.getRecipes({recipe: '', page: 1});
  }
}
