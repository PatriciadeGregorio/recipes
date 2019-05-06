import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  searchRecipe = '';


  constructor() {

  }

  onSearch(searchTerm) {
    if (typeof(searchTerm) === 'string') {
      this.searchRecipe = searchTerm;
    }
  }



}
