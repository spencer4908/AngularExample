import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { JokesListComponent } from '../jokes-list/jokes-list.component';
import { ChuckNorrisApiService } from '../../services/chuck-norris-api.service';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, JokesListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  public query: string = '';
  public jokes: Joke[] = [];
  public categories: string[] = [];
  public selectedCategory: string = '';

  constructor(public jokesApi: ChuckNorrisApiService) {
    this.jokesApi.getCategories().subscribe((apiValues: any) => {
      this.categories = apiValues;
    });
  }

  setJokes(value: any) {
    this.jokes = [];

    if(value.length > 1) {
      this.jokes = value;
    }
    else {
      this.jokes.push(value);
    }
  }

  getRandomJoke() {
    this.jokesApi.getRandomJoke().subscribe((apiValues: any) => {
      this.setJokes(apiValues);
    });
  }

  getJokesByCategory(category: string) {
    if(this.categories.includes(category)) {
      this.jokesApi.getJokeByCategory(category).subscribe((apiValues: any) => {
        this.setJokes(apiValues);
      });
    }
  }

  getJokesByQuery(query: string) {
    if(query && query.split('').length >= 3) {
      this.jokesApi.getJokeByQuery(query).subscribe((apiValues: any) => {
        this.setJokes(apiValues.result);
      });
    }
  }
}
