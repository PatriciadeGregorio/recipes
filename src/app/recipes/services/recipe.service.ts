import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_CONSTANT } from '../../core/url-constants';
import { Observable } from 'rxjs';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';
import * as _ from 'lodash';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) {
   }

  getRecipes(recipe?: string): Observable<RecipeResponse> {
    recipe = (_.isUndefined(recipe) ? '' : recipe);
    return this.http.get<RecipeResponse>(URL_CONSTANT, {
      params: {
        q: recipe
      }
    });
  }

}
