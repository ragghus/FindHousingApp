import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseURL = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList = [
    {
    id:999,
    name: 'Acme Fresh Start Housing',
    city: 'Melbourne',
    state: 'Victoria',
    availableUnits: 10,
    photo: `${this.baseURL}/example-house.jpg`,
    wifi: true,
    laundry: true
  },
  {
    id:979,
    name: 'Advent Housing',
    city: 'Sydney',
    state: 'NSW',
    availableUnits: 25,
    photo: `${this.baseURL}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    wifi: true,
    laundry: true
  },
  {
    id:500,
    name: 'Properity life Housing',
    city: 'Brisbane',
    state: 'Queensland',
    availableUnits: 10,
    photo: `${this.baseURL}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
    wifi: true,
    laundry: true
  },
  {
    id:600,
    name: 'Saaras New Housing',
    city: 'Perth',
    state: 'WA',
    availableUnits: 10,
    photo: `${this.baseURL}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
    wifi: true,
    laundry: true
  },
  {
    id:79,
    name: 'Goodlife Nature Housing',
    city: 'Melbourne',
    state: 'Victoria',
    availableUnits: 10,
    photo: `${this.baseURL}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
    wifi: true,
    laundry: true
  },
  {
    id:63,
    name: 'BuyAssets Housing',
    city: 'Sydney',
    state: 'NSW',
    availableUnits: 10,
    photo: `${this.baseURL}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
    wifi: true,
    laundry: true
  },
  {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseURL}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseURL}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseURL}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseURL}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    }
];  

getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
}

getHouseLocationById(id: number): HousingLocationInfo | undefined {
  return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
}

}
