import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IJourney } from '../catalog/journey.model';
import { Category } from '../Enums/category.enum';

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

  categoryEnum = Category;

  showDetails(journey: IJourney): void {
    console.log('Journey details:', journey);}

  getFriendlyCategoryName(category: Category): string {
    if(category === Category.AmerykaPolnocnaPoludniowa)
      return 'Ameryka Północna/Południowa';
    return Category[category];
  }
}
