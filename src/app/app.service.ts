import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, CountryStatus } from './models';

const BASE_URL = `https://api.covid19api.com/`;
const COVID_URL = {
  COUNTRIES: `${BASE_URL}countries`,
  BY_COUNTRY: (country: string) => `${BASE_URL}dayone/country/${country}`,
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries$ = this.http.get<Country[]>(COVID_URL.COUNTRIES);
  getCasesByCountry = (countrySlug: string) => {
    return this.http.get<CountryStatus[]>(`${COVID_URL.BY_COUNTRY(countrySlug)}`)
  }
}
