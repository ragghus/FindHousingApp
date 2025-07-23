import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingLocationInfo } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';

@Component({
  standalone: true,
  selector: 'app-housing-details',
  imports: [CommonModule, RouterModule],
  template: `
    <article>
      <img
        class='listing-photo'
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"
        crossorgin      
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location:</h2>
        <ul>
          <li>Units Available: {{housingLocation?.availableUnits}}</li>
          <li>Wifi Available: {{housingLocation?.wifi}}</li>
          <li>Laundry Available: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./housing-details.css']
})
export class HousingDetails {

  // to check page navigates with correct id
  // route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation : HousingLocationInfo | undefined;
  
  constructor(route: ActivatedRoute = inject(ActivatedRoute)) {
        const housingLocationId = Number(route.snapshot.params['id']);
        this.housingLocation = this.housingService.getHouseLocationById(housingLocationId);
        console.log('HousingDetails loaded with ID:'+ housingLocationId);
  }
}
