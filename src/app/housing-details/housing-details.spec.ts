import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingDetails } from './housing-details';

describe('HousingDetails', () => {
  let component: HousingDetails;
  let fixture: ComponentFixture<HousingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
