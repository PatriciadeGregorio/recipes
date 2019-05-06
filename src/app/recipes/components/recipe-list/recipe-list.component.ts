import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  page = 1;
  @Input() search: string;

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

  ngOnChanges() {
    if (!_.isUndefined(this.search)) {
      this.recipeService
        .getRecipes({ recipe: this.search })
        .subscribe((resp: RecipeResponse) => {
          this.initializeData();
          this.recipes = resp.results;
        });
    }
  }

  onScroll() {
    this.page++;
    this.recipeService
      .getRecipes({ recipe: this.search, page: this.page })
      .subscribe((resp: RecipeResponse) => {
        this.recipes = this.recipes.concat(resp.results);
      });
  }

  initializeData() {
    this.recipes = [];
    this.page = 1;
  }
}
