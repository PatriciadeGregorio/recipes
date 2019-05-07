import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  numberPage = 1;
  @Input() recipes: Recipe[];
  @Output()pagination = new EventEmitter<number>();


  constructor(public recipeService: RecipeService) {
  }

  onScroll() {
    this.numberPage++;
    this.pagination.emit(this.numberPage);

  }
}
