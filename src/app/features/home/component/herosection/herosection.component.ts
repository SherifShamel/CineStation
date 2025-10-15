import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GetMoviesService } from '../../../../shared/services/get-movies.service';
import { Movies } from '../../../../core/interfaces/movies.interface';

@Component({
  selector: 'app-herosection',
  imports: [CarouselModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent implements OnInit {
  private readonly _GetMoviesService = inject(GetMoviesService);

  movies!: Movies[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  ngOnInit(): void {
    this._GetMoviesService.getMovies().subscribe({
      next: (res) => {
        this.movies = res.results;
      },
      error: (err) => {
        console.log(err);
        // TODO: ADD Toaster
      },
    });
  }
}
