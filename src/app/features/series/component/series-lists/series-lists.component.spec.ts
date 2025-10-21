import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListsComponent } from './series-lists.component';

describe('SeriesListsComponent', () => {
  let component: SeriesListsComponent;
  let fixture: ComponentFixture<SeriesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
