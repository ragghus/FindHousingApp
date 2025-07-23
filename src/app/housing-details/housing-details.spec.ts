// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { HousingDetails } from './housing-details';
// import { provideRouter } from '@angular/router';

// describe('HousingDetails', () => {
//   let component: HousingDetails;
//   let fixture: ComponentFixture<HousingDetails>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HousingDetails],
//       providers: [
//         provideRouter([]), 
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               params: {
//                 id:'999', // mock route param
//             }
//           }
//         }
//       }
//     ],
//     }).compileComponents();
//     fixture = TestBed.createComponent(HousingDetails);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HousingDetails } from './housing-details';
import { of } from 'rxjs';

describe('HousingDetails', () => {
  let fixture;
  let component: HousingDetails;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingDetails], // standalone component
      providers: [
        provideRouter([]), // provide router infrastructure
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
               params: { id: 999 },
            },
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HousingDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should get id param from route snapshot', () => {
  //   expect(component.id).toBe(999);  // Assuming your component converts string id to number
  // });
});
