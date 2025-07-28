import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingLocationInfo } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-housing-details',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
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
        <h2 class="section-heading">About this housing:</h2>
        <ul>
          <li>Units Available: {{housingLocation?.availableUnits}}</li>
          <li>Wifi Available: {{housingLocation?.wifi}}</li>
          <li>Laundry Available: {{housingLocation?.laundry}}</li>
        </ul>
      </section>

      <section class="listing-apply">
        <h2 class="apply-form-heading">Apply now to reserve the house!</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstname"/>

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastname"/>

          <label for="email-id">Email</label>
          <input id="email-id" type="text" formControlName="email"/>

          <button type="submit" class="primary">Register</button>
        </form>

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

  applyForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('')
  });
  
  constructor(route: ActivatedRoute = inject(ActivatedRoute)) {
        const housingLocationId = Number(route.snapshot.params['id']);
        this.housingService.getHouseLocationById(housingLocationId).then((housingLocation) => {
          this.housingLocation = housingLocation;
        });
        console.log('HousingDetails loaded with ID:'+ housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstname ?? '',
      this.applyForm.value.lastname ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
