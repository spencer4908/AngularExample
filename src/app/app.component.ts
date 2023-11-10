import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent  } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SearchComponent],
  template: `<app-search/>`
})
export class AppComponent {}
