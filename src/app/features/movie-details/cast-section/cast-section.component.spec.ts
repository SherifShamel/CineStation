import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSectionComponent } from './cast-section.component';

describe('CastSectionComponent', () => {
  let component: CastSectionComponent;
  let fixture: ComponentFixture<CastSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
