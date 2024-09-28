import { Component, OnInit } from '@angular/core';
import { IJourney } from './journey.model';
import { CommonModule } from '@angular/common';
import { JourneyService } from '../services/journey.service';
import { JourneyDetailsComponent } from '../journey-details/journey-details.component';
import { Category } from "../Enums/category.enum";

@Component({
  selector: 'stu-catalog',
  standalone: true,
  imports: [CommonModule, JourneyDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  journeys: IJourney[] = [];
  filter: Category | null = null;
  Category = Category;

  constructor(private journeyService: JourneyService) { }
  

  ngOnInit(): void {
    this.journeyService.getJourneys().subscribe({
      next: (data: IJourney[]) => {
        this.journeys = data;
      },
      error: (error: any) => {
        console.error('Error fetching journeys', error);
      }
    });
  }

  getFilteredJourneys() {
    return this.filter === null
      ? this.journeys
      : this.journeys.filter((journey) => journey.category === this.filter);
  }
}
