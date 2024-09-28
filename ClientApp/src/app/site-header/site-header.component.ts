import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'stu-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  imports: [RouterModule],
})
export class SiteHeaderComponent {

  constructor() { }

}
