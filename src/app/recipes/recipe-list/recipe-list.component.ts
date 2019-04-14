import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  movies: Recipe [];

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getRecipes();
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe ((resp: RecipeResponse) => {
      this.recipes = resp.results;
    });
  }

}
