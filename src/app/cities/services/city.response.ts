export interface CityResponse {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
  };
  href: string;
  company: string[];
  gbfs_href: string;
}
