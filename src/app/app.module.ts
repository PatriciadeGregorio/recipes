import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RecipesModule } from './recipes/recipes.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './stores/counter.reducers';
import { recipesReducers } from './stores/recipes.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipesEffects } from './stores/recipes.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RecipesModule,
    StoreModule.forRoot({ count: counterReducer, recipes: recipesReducers }),
    EffectsModule.forRoot([RecipesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
