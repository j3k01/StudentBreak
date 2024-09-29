import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJourney } from '../catalog/journey.model';
import { JourneyService } from '../services/journey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stu-journey-description',
  standalone: true,
  templateUrl: './journey-description.component.html',
  styleUrls: ['./journey-description.component.css'],
})
export class JourneyDescriptionComponent implements OnInit {
  journey!: IJourney;

  constructor(
    private route: ActivatedRoute,
    private journeyService: JourneyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const journeyId = this.route.snapshot.paramMap.get('id');
    if (journeyId) {
      this.journeyService.getJourneyById(journeyId).subscribe({
        next: (data) => {
          this.journey = data;
        },
        error: (err) => {
          console.error('Error fetching journey details:', err);
        },
      });
    }
  }

  getFriendlyCategoryName(category: any): string {
    if (category === 'AmerykaPolnocnaPoludniowa') {
      return 'Ameryka Północna/Południowa';
    }
    return category;
  }

  goBack()
  {
    this.router.navigate(['/catalog']);
  }
}
