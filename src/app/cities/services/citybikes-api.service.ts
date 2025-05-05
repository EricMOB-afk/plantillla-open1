import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { City } from '../model/city.entity';
import { CityResponse } from './city.response';
import { CityAssembler } from './city.assembler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitybikesApiService {
private baseUrl = environment.cityBikesProviderApiBaseUrl
private citiesEndpoint = environment.cityBikesProviderCitiesEndpointPath;

constructor(private http: HttpClient) { }

getCities(): Observable<City[]> {
  return this.http.get<{ networks: CityResponse[] }>(`${this.baseUrl}${this.citiesEndpoint}`)
    .pipe(
      map(response => CityAssembler.toEntityFromResponseArray(response.networks.slice(0,30))
    ));
}


}
