import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinnerComponent} from "./components/spinner/spinner.component";
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBootstrapComponent } from './components/modal-bootstrap/modal-bootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SpinnerComponent,
    PaginatorComponent,
    CharactersComponent,
    HeaderComponent,
    LocationsComponent,
    ModalBootstrapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
