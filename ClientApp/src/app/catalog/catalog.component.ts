import { Component } from '@angular/core';
import { IJourney } from './journey.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stu-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  journeys : IJourney[];
  filter: string = '';

  constructor() {
    this.journeys = [{
      id: 1,
      description : "Sample text",
      country : "Poland",
      destination : "Bieszczady",
      price : 500.0,
      date: new Date('2005-12-15'),
      category : "Europa",
      imageName : "poland.png"
    },
    {
      id: 2,
      description : "Sample text",
      country : "Germany",
      destination : "Berlin",
      price : 500.0,
      date: new Date('2005-12-15'),
      category : "Azja",
      imageName : "poland.png"
    }];
  }

  getFilteredJourneys() {
    return this.filter === ''
      ? this.journeys : this.journeys.filter((journey) => journey.category === this.filter);
  }
}
