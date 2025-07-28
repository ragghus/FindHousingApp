import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
      const data = await fetch (this.url);
      return (await data.json()) ?? [];
  }

  async getHouseLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data =await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? [];
  }

  submitApplication(firstname: string, lastname: string, email: string) {
    console.log(` Received New Application: Firstname:${firstname}, Lastname:${lastname}, Email:${email}`)
  }

}
