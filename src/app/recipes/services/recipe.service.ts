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

  getRecipes(SearchOptions: {recipe?: string, page?: number}): Observable<RecipeResponse> {
    SearchOptions.recipe = (_.isUndefined(SearchOptions.recipe) ? '' : SearchOptions.recipe);
    SearchOptions.page = (_.isUndefined(SearchOptions.page) ? 1 : SearchOptions.page);
    return this.http.get<RecipeResponse>(URL_CONSTANT, {
      params: {
        q: SearchOptions.recipe,
        p: SearchOptions.page.toString()
      }
    });
  }

}
