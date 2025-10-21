import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);

  movieId!: any;

  ngOnInit(): void {
    this.movieId = this._ActivatedRoute.params.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
