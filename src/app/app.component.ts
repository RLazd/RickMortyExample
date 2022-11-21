import { Component, OnInit } from '@angular/core';
import {Theme} from "./models/theme.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'Loader & Pagination';
  // loading = true;
  //page = 1; - for bootstrap pagination
  // items = [...Array(180).keys()].map((item) => `Item ${item + 1}`);
  // itemsToDisplay: string[] = [];
  // perPage = 10;
  // total = Math.ceil(this.items.length / this.perPage);

  user = {
    name: 'Alexa',
    age: 78,
  };

  constructor() {
    document.body.classList.add(Theme.LIGHT);
  }

  ngOnInit(): void {
    window.localStorage.setItem('cat', 'is hungry');
    window.localStorage.setItem('user', JSON.stringify(this.user));

    const catInfo = window.localStorage.getItem('cat') || 'no info';

    console.log(catInfo);
    console.log(JSON.parse(catInfo)); // JSON.parse, ja grib tpakaļ objektu

    //Session Storage
    window.sessionStorage.setItem('hello', 'world');
    const hello = window.sessionStorage.getItem('hello');

    console.log(hello);
    console.log(window.localStorage.getItem('not found'));

    window.localStorage.removeItem('cat');

    document.cookie = 'username=ketija; domain=localhost';
  }

}
