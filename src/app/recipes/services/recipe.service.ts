import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_CONSTANT } from '../../core/url-constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) {
   }

  getRecipes(): Observable<any[]> {
    return this.http.get<any []>(URL_CONSTANT);
  }
}
