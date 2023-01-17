import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';
import { ChuckNorrisJokesService } from 'src/app/services/chuck-norris-jokes.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html'
})
export class QueryComponent {
  public jokes: Joke[] = [];
  public queryValue: string = "";
  public showJokes: boolean = false;

  constructor(public jokesService: ChuckNorrisJokesService) {}

  onKey(event: any) { // without type info
    this.queryValue = event.target.value;
  }

  queryJoke (query: string) {
    this.jokesService.queryJokes(query).subscribe((data: any) => {
      this.jokes = data.result;
    });

    this.showJokes = true;
  }
}
