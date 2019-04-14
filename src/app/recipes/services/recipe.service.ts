import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_CONSTANT } from '../../core/url-constants';
import { Observable } from 'rxjs';
import { RecipeResponse } from 'src/app/core/entities/recipeResponse';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) {
   }

  getRecipes(): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(URL_CONSTANT);
  }
}
