import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { BehaviorSubject, delay, finalize, Subject, takeUntil } from 'rxjs';

import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalBootstrapComponent} from "../../components/modal-bootstrap/modal-bootstrap.component";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  @ViewChild('modal')
  modal: ModalBootstrapComponent | undefined;

  characters: Character[] = [];
  total = 0;
  currentPage = 1;
  ngDestroyed$ = new Subject<void>();
  loading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string>('');


  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.getCharacters(this.currentPage);

    this.route.queryParams.subscribe((params) => {
      console.log(params);
      const page = Number(params['page']) || 1;

      this.loading$.next(true);
      this.characters = [];
      this.currentPage = page;

      this.characterService
        .getCharacters(page)
        .pipe(
          // delay(1000),
          finalize(() => {
            this.loading$.next(false);
          }),
          takeUntil(this.ngDestroyed$),
        )
        .subscribe({
          next: (response) => {
            console.log(response);
            this.errorMessage$.next('');
            this.characters = response.results;
            this.total = response.info.pages;
          },
          error: (error) => {
            this.errorMessage$.next(error.message);
          },
        });
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  getCharacters(page: number): void {
   this.router.navigate(['/characters'], {
     queryParams:{
       page: page,
     },
    })
  }

  openDetails(id: number): void {
    this.modal?.openVerticallyCentered(id);
  }
}
