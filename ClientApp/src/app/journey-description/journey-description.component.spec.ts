import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDescriptionComponent } from './journey-description.component';

describe('JourneyDescriptionComponent', () => {
  let component: JourneyDescriptionComponent;
  let fixture: ComponentFixture<JourneyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
