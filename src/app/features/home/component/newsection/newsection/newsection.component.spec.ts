import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsectionComponent } from './newsection.component';

describe('NewsectionComponent', () => {
  let component: NewsectionComponent;
  let fixture: ComponentFixture<NewsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
