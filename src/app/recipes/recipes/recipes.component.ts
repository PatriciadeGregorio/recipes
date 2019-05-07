import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  searchRecipe = '';
  page = 1;
  recipes: Recipe[];

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

  onSearch(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.searchRecipe = searchTerm;
      if (!_.isUndefined(this.searchRecipe)) {
        this.recipeService
          .getRecipes({ recipe: this.searchRecipe })
          .subscribe((resp: RecipeResponse) => {
            this.initializeData();
            this.recipes = resp.results;
          });
      }
    }
  }

  onPagination(page) {
    this.page = page;
    this.recipeService
      .getRecipes({ recipe: this.searchRecipe, page: this.page })
      .subscribe((resp: RecipeResponse) => {
        this.recipes = this.recipes.concat(resp.results);
      });
  }

  initializeData() {
    this.recipes = [];
    this.page = 1;
  }
}
