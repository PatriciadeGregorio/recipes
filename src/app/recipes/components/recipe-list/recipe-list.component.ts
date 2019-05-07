import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/core/entities/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];
  @Output() pagination = new EventEmitter<number>();

  constructor(public recipeService: RecipeService) {}


  onScroll() {
    this.pagination.emit();
  }
}
