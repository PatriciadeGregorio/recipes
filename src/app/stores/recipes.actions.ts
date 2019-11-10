import { Action } from '@ngrx/store';
import { Recipe } from '../core/entities/recipe';

export enum ERecipes {
  GET_RECIPES = '[Recipes] GET_RECIPES',
  GET_RECIPES_SUCCESS = '[Recipes] GET_RECIPES_SUCCESS'
}

export class GetRecipes implements Action {
  public readonly type = ERecipes.GET_RECIPES;
}

export class GetRecipesSuccess implements Action {
  public readonly type = ERecipes.GET_RECIPES_SUCCESS;
  constructor(public payload: { recipes: Recipe[] }) {}
}
export type RecipesActions = GetRecipes | GetRecipesSuccess;
