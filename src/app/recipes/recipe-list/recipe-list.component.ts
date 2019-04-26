import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as _ from 'lodash';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  searchTerm: FormControl = new FormControl();
  page = 1;
  searchRecipe = '';

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) {
    this.search();
   }

  ngOnInit() {
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

  search() {
    this.searchTerm.valueChanges.pipe(debounceTime(400))
    .subscribe((data: string) => {
      this.searchRecipe = data;
      if (!(_.isUndefined(data))) {
          this.recipeService.getRecipes({recipe: data}).subscribe((resp: RecipeResponse) => {
            this.initializeData();
            this.recipes = resp.results;
          });
      }
    });
  }

  onScroll() {
    this.page++;
    this.recipeService.getRecipes({recipe: this.searchRecipe, page : this.page}).subscribe((resp: RecipeResponse) => {
      this.recipes = this.recipes.concat(resp.results);
    });
  }

  initializeData() {
    this.recipes = [];
    this.page = 1;
  }

}
