import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import {LocationsComponent} from "./components/locations/locations.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
