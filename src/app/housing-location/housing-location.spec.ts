import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocation } from './housing-location';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;
    (component as any).housingLocation.set({
      id: 1,
      name: 'Test Home',
      city: 'Test City',
      state: 'TS',
      photo: '',
      availableUnits: 2,
      wifi: true,
      laundry: false
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
