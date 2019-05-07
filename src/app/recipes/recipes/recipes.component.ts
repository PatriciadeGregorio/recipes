import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class RecipesComponent implements OnInit {
  readonly SIZE_PAGE = 10;
  searchRecipe = '';
  page = 1;
  recipes: Recipe[];
  keepPagination = true;
  @ViewChild('scroll-list') scrollList: ElementRef;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

  onSearch(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.searchRecipe = searchTerm;
      if (!_.isUndefined(this.searchRecipe)) {
        this.recipeService.getRecipes({ recipe: this.searchRecipe }).subscribe((resp: RecipeResponse) => {
            this.initializeData();
            this.recipes = resp.results;
          });
      }
    }
  }

  onPagination() {
    if (this.keepPagination) {
      this.page ++;
      this.recipeService.getRecipes({ recipe: this.searchRecipe, page: this.page }).subscribe((resp: RecipeResponse) => {
        this.keepPagination = (resp.results.length === this.SIZE_PAGE);
          this.recipes = this.recipes.concat(resp.results);
        });
    }
  }

  initializeData() {
    this.recipes = [];
    this.page = 1;
    this.keepPagination = true;
    // this.scrollList.nativeElement.scrollTo(0, 0);
  }
}
