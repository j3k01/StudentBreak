import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJourney } from '../catalog/journey.model';

@Injectable({
  providedIn: 'root'
})

export class JourneyService {
  private apiUrl = 'https://localhost:44340/api/Journey'; 

  constructor(private http: HttpClient) { }

  getJourneys(): Observable<IJourney[]> {
    return this.http.get<IJourney[]>(this.apiUrl);
  }
}

