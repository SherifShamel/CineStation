import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISeriesDetails } from '../../core/interfaces/iseries-details.interface';
import { SeriesDetailsService } from '../../shared/services/seriesDetails/series-details.service';
import { SeriesCastSectionComponent } from './series-cast-section/series-cast-section.component';
import { IVideos } from '../../core/interfaces/ivideos.interface';

@Component({
  selector: 'app-series-details',
  imports: [SeriesCastSectionComponent],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css',
})
export class SeriesDetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _SeriesDetailsService = inject(SeriesDetailsService);

  seriesId!: any;
  seriesDetails: ISeriesDetails = {} as ISeriesDetails;

  videos: IVideos[] = [];
  rightTrailer!: IVideos | undefined;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.seriesId = params.get('m_id');
      },
    });

    this._SeriesDetailsService.getSeriesDetails(this.seriesId).subscribe({
      next: (res) => {
        this.seriesDetails = res;
        // console.log(this.seriesDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.openTrailer();
  }

  getRightTrailer(video: IVideos) {
    return video ? video.type == 'Trailer' && video.official == true : ({} as IVideos);
  }

  openTrailer() {
    this._SeriesDetailsService.getSeriesVideos(this.seriesId).subscribe({
      next: (res) => {
        this.videos = res.results;
        console.log(res);

        this.rightTrailer = this.videos.find(this.getRightTrailer);

        console.log(this.rightTrailer);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
