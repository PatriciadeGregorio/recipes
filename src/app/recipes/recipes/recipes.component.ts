import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetRecipes } from 'src/app/stores/recipes.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  readonly SIZE_PAGE = 10;
  searchRecipe = '';
  page = 1;
  recipes: Recipe[];
  recipes$: Observable<Recipe[]>;
  keepPagination = true;
  count$: Observable<number>;

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private store: Store<{ count: number }>
  ) {
    this.count$ = this.store.pipe(select('count'));
    this.recipes$ = this.store.pipe(select('recipes'));
  }

  ngOnInit() {
    // this.recipes = this.route.snapshot.data['recipes'].results;
    this.store.dispatch(new GetRecipes());
    this.recipes$.subscribe((resp: any) => {
      this.recipes = resp.recipes;
      console.log(resp.recipes);
    });
  }

  onSearch(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.searchRecipe = searchTerm;
      if (!_.isUndefined(this.searchRecipe)) {
        this.recipeService
          .getRecipes({ recipe: this.searchRecipe })
          .subscribe((resp: RecipeResponse) => {
            this.initializeData();
            // this.recipes = resp.results;
          });
      }
    }
  }

  onPagination() {
    if (this.keepPagination) {
      this.page++;
      this.recipeService
        .getRecipes({ recipe: this.searchRecipe, page: this.page })
        .subscribe((resp: RecipeResponse) => {
          this.keepPagination = resp.results.length === this.SIZE_PAGE;
          // this.recipes = this.recipes.concat(resp.results);
        });
    }
  }

  initializeData() {
    this.recipes = [];
    this.page = 1;
    this.keepPagination = true;
  }
}
