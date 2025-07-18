import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocation } from './housing-location'; // Your component
import { HousingLocationInfo } from './housinglocation';

@Component({
  standalone: true,
  imports: [HousingLocation],
  template: `<app-housing-location [housingLocation]="mockLocation" />`
})
export class TestHostComponent {
  mockLocation: HousingLocationInfo = {
    id: 1,
    name: 'Test Home',
    city: 'Test City',
    state: 'TS',
    photo: '',
    availableUnits: 3,
    wifi: true,
    laundry: false
  };
}
