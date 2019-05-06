import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  searchTerm: FormControl = new FormControl();
  searchRecipe = '';


  constructor() {
    this.search();
  }

  search() {
    this.searchTerm.valueChanges.pipe(debounceTime(400))
    .subscribe((data: string) => {
      this.searchRecipe = data;
    });
  }

}
