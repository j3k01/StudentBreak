import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IJourney } from '../catalog/journey.model';

@Component({
  selector: 'stu-journey-details',
  standalone: true,
  imports: [],
  templateUrl: './journey-details.component.html',
  styleUrl: './journey-details.component.css'
})
export class JourneyDetailsComponent {
  @Input() journey!: IJourney;
  @Output() moreDetails = new EventEmitter()


  showDetails(journey: IJourney): void {
    console.log('Journey details:', journey);}
  }
