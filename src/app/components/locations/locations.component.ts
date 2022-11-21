import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, delay, finalize, Subject, takeUntil } from 'rxjs';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  locations: Location[] = [];
  total = 0;
  currentPage = 1;
  ngDestroyed$ = new Subject<void>();
  loading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string>('');

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocations(this.currentPage);
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  getLocations(page: number): void {
    this.loading$.next(true);
    this.locations = [];
    this.currentPage = page;
    this.locationService
      .getLocations(page)
      .pipe(
        delay(1000),
        finalize(() => {
          this.loading$.next(false);
        }),
        takeUntil(this.ngDestroyed$),
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.errorMessage$.next('');
          this.locations = response.results;
          this.total = response.info.pages;
        },
        error: (error) => {
          this.errorMessage$.next(error.message);
        },
      });
  }
}
