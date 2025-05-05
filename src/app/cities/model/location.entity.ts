export class Location {
    latitude: number;
    longitude: number;
    city: string;
    country: string;

    constructor() {
      this.latitude = 0.0;
      this.longitude = 0.0;
      this.city = '';
      this.country = '';
    }
}
