import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { RecipeResolverService } from './resolvers/recipe-resolver.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchComponent } from './components/search/search.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [RecipeListComponent, RecipesComponent, SearchComponent, CustomInputComponent],
  providers: [RecipeService, RecipeResolverService]
})
export class RecipesModule { }
