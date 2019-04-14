import { Recipe } from './recipe';

export class RecipeResponse {
  title: string;
  version: number;
  href: string;
  results: Recipe[];

}
