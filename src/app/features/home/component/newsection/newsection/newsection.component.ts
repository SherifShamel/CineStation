import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Movies } from '../../../../../core/interfaces/movies.interface';
import { GetMoviesService } from '../../../../../shared/services/movies/get-movies.service';

@Component({
  selector: 'app-newsection',
  imports: [MatCardModule, MatButtonModule, CarouselModule],
  templateUrl: './newsection.component.html',
  styleUrl: './newsection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsectionComponent implements OnInit {
  popularMovies: Movies[] = [];
  mockData!: Observable<Movies[]>;
  private readonly GetMoviesService = inject(GetMoviesService);

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
    this.mockData = this.GetMoviesService.getPopular();
    this.GetMoviesService.getPopular().subscribe({
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
