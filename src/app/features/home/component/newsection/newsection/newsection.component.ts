import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-newsection',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './newsection.component.html',
  styleUrl: './newsection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsectionComponent {}
