import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Movies } from '../../../../core/interfaces/movies.interface';
import { GetMoviesService } from '../../../../shared/services/get-movies.service';

@Component({
  selector: 'app-top-rated',
  imports: [CarouselModule],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css',
})
export class TopRatedComponent implements OnInit {
  popularMovies: Movies[] = [];
  private readonly _GetMoviesService = inject(GetMoviesService);

  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };

  ngOnInit(): void {
    this._GetMoviesService.getTopRated().subscribe({
      next: (res) => {
        this.popularMovies = res.results;
      },
      error: (err) => {
        console.log(err);
        // TODO: ADD Toaster
      },
    });
  }
}
