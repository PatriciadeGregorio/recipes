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

  constructor(public recipeService: RecipeService, private route: ActivatedRoute) {
    this.searchTerm.valueChanges.pipe(debounceTime(400))
    .subscribe((data: string) => {
      if (!(_.isUndefined(data))) {
        console.log(data);
          this.recipeService.getRecipes(data).subscribe((response: RecipeResponse) => {
            this.recipes = response.results;
          });
      }
    });
   }

  ngOnInit() {
    this.recipes = this.route.snapshot.data['recipes'].results;
  }

}
