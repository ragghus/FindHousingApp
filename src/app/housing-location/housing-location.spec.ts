import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocation } from './housing-location';
import { HousingLocationInfo } from './housinglocation';
import { provideRouter } from '@angular/router';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
            providers: [
        provideRouter([]), // provide router infrastructure
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;

        // ✅ Set required input before detectChanges
    // ✅ Use setInput for signal-based inputs
    fixture.componentInstance.housingLocation = {
      id: 1,
      name: 'Test House',
      city: 'Test City',
      state: 'TS',
      photo: 'test-photo.jpg',
      availableUnits: 3,
      wifi: false,
      laundry: false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
