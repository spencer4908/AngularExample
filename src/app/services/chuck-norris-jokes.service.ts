import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisJokesService {
  private api = 'https://api.chucknorris.io/jokes/search';

  constructor(private httpClient: HttpClient) {}

  queryJokes(query: string) {
    return this.httpClient.get(this.api + "?query=" + query);
  }
}
