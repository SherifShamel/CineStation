import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movies } from '../../../core/interfaces/movies.interface';
import { GetMoviesService } from '../../services/movies/get-movies.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  private readonly _GetMoviesService = inject(GetMoviesService);
  private readonly nav = inject(NavbarComponent);

  @ViewChild('search') searchWord!: ElementRef<any>;
  word: string = '';
  movies: Movies[] = [];
  @Input() searchOpened!: boolean;

  showElement(event: any) {
    event = this.searchWord.nativeElement.value;
    this._GetMoviesService.searchMovies(event).subscribe({
      next: (res) => {
        event = res.results;
        this.movies = event;
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this._GetMoviesService.searchMovies(event);
  }

  closeSearch() {
    this.nav.search.set(!this.nav.search());
    this.searchOpened = false;
  }
}
