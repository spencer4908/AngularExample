import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jokes-list.component.html',
  styleUrl: './jokes-list.component.scss'
})
export class JokesListComponent {
  @Input() jokes: Joke[] = [];
}
