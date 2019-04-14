import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { RecipeResolverService } from './resolvers/recipe-resolver.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [RecipeListComponent],
  providers: [RecipeService, RecipeResolverService]
})
export class RecipesModule { }
