import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {LocationApiResponse} from "../models/location.model";

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocations(page: number): Observable<LocationApiResponse> {
    const url = `https://rickandmortyapi.com/api/location/?page=${page}`;

    return this.http.get<LocationApiResponse>(url);
  }
}
