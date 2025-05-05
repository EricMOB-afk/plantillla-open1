import { CityResponse } from './city.response';
import { City } from '../model/city.entity';
import { Location } from '../model/location.entity';

export class CityAssembler {
  static toEntityFromResponseArray(responseArray: CityResponse[]): City[] {
    return responseArray.map((response) => this.toEntityFromResponse(response));
  }

  static toEntityFromResponse(response: CityResponse): City {
    const city = new City();
    city.id = response.id;
    city.name = response.name;
    city.location = new Location();
    city.location.latitude = response.location.latitude;
    city.location.longitude = response.location.longitude;
    city.location.city = response.location.city;
    city.location.country = response.location.country;
    city.href = response.href;
    city.company = response.company;
    city.gbfs_href = response.gbfs_href;
    return city;
  }
}
