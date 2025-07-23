import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HousingDetails } from './housing-details';

describe('HousingDetails', () => {
  let component: HousingDetails;
  let fixture: ComponentFixture<HousingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingDetails],

      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => '999', // mock route param
            },
          },
        },
      },
    ],
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
