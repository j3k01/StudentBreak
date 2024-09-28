import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category } from './Enums/category.enum';
import { JourneyDetailsComponent } from './journey-details.component';

describe('JourneyDetailsComponent', () => {
  let component: JourneyDetailsComponent;
  let fixture: ComponentFixture<JourneyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
