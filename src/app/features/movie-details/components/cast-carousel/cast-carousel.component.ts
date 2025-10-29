import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { ICast } from '../../../../core/interfaces/icast.interface';
import { MovieDetailsService } from '../../../../shared/services/movieDetails/movie-details.service';

@Component({
  selector: 'app-cast-carousel',
  imports: [CarouselModule],
  templateUrl: './cast-carousel.component.html',
  styleUrl: './cast-carousel.component.css',
})
export class CastCarouselComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _MovieDetailsService = inject(MovieDetailsService);

  movieId!: any;
  movieCast!: ICast[];

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.movieId = params.get('m_id');
      },
    });

    this._MovieDetailsService.getMovieCredits(this.movieId).subscribe({
      next: (res) => {
        this.movieCast = res.cast;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 0,
    lazyLoad: true,
    margin: 10,
    responsiveRefreshRate: 100,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    // nav: true,
  };
}
