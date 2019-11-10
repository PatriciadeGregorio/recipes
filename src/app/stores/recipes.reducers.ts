import { RecipesActions, ERecipes } from './recipes.actions';

const initialRecipeState = {
  recipes: []
};

export function recipesReducers(
  state = initialRecipeState,
  action: RecipesActions
) {
  switch (action.type) {
    case ERecipes.GET_RECIPES: // Se podría omitir y pasar por el default
      return {
        ...state
      };
    case ERecipes.GET_RECIPES_SUCCESS:
      // return { // Opción 1
      //   ...state,
      //   recipes: action.payload
      // };
      return {
        // Opción 2
        ...state,
        recipes: action.payload.recipes
      };
    default:
      return state;
  }
}
