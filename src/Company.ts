import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

// Implement tells typescript that class `User` must implement or satisfy all the properties of Mappable
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContentInHTML(): string {
    return (
      `<div>` +
      `<h2>Company Name: ${this.companyName}</h1>` +
      `<h4>Catch Phrase: ${this.catchPhrase}</h4>` +
      `</div>`
    );
  }
}
