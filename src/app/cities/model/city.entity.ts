import { Location } from './location.entity';

export class City {
  id: string;
  name: string;
  location: Location;
  href: string;
  company: string[];
  gbfs_href: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.location = new Location();
    this.href = '';
    this.company = [];
    this.gbfs_href = '';
  }
}
