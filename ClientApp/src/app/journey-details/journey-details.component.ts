import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IJourney } from '../catalog/journey.model';
import { Category } from '../Enums/category.enum';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

  categoryEnum = Category;

  getFriendlyCategoryName(category: Category): string {
    if(category === Category.AmerykaPolnocnaPoludniowa)
      return 'Ameryka Północna/Południowa';
    return Category[category];
  }

  navigateToJourney(id: number): void {
    this.router.navigate(['/journey', id]);
  }
}
