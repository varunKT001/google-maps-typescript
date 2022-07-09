import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

// Implement tells typescript that class `User` must implement or satisfy all the properties of Mappable
export class User implements Mappable {
  name: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContentInHTML(): string {
    return `<h2>User Name: ${this.name}</h2>`;
  }
}
