import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ERecipes, GetRecipesSuccess } from './recipes.actions';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { RecipeService } from '../recipes/services/recipe.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../core/entities/recipe';

@Injectable()
export class RecipesEffects {
  constructor(
    private actions: Actions,
    private recipesService: RecipeService,
    private store: Store<{ recipes: any }>
  ) {}
  // @Effect() // Opción 1
  // getRecipes$ = this.actions.pipe(
  //   ofType(ERecipes.GET_RECIPES),
  //   switchMap(() => {
  //     return this.recipesService.getRecipes({ recipe: '' }).pipe(
  //       map((response: any) => {
  //         this.store.dispatch(new GetRecipesSuccess(response.results));
  //       })
  //     );
  //   })
  // );

  @Effect() // Opción 2
  loadCustomers$: Observable<GetRecipesSuccess> = this.actions.pipe(
    ofType(ERecipes.GET_RECIPES),
    mergeMap(() =>
      this.recipesService
        .getRecipes({ recipe: '' })
        .pipe(
          map(response => new GetRecipesSuccess({ recipes: response.results }))
        )
    )
  );
}
