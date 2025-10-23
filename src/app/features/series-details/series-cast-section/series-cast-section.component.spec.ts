import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCastSectionComponent } from './series-cast-section.component';

describe('SeriesCastSectionComponent', () => {
  let component: SeriesCastSectionComponent;
  let fixture: ComponentFixture<SeriesCastSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCastSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCastSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
