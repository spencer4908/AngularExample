import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {
  API_URL  =  'https://api.chucknorris.io/jokes';

  constructor(private  httpClient:  HttpClient) { }

  getRandomJoke(){
    return  this.httpClient.get(`${this.API_URL}/random`);
  }

  getJokeByCategory(category: string){
    return this.httpClient.get(`${this.API_URL}/random?category=${category}`)
  }

  getCategories(){
    return this.httpClient.get(`${this.API_URL}/categories`);
  }

  getJokeByQuery(query: string) {
    return this.httpClient.get(`${this.API_URL}/search?query=${query}`);
  }
}
