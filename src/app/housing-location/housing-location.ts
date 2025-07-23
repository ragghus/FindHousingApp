import { Component, Input, input } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink],
  template: `
    <section class="listing">
      <img 
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin />
      <a class="listing-heading" [routerLink]="['/details', housingLocation.id]">{{housingLocation.name}}</a><br>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
    </section>  
  `,
  styleUrls: ['./housing-location.css']
})

export class HousingLocation {
  @Input() housingLocation!: HousingLocationInfo;
}
