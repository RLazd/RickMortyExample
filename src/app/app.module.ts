import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, PaginatorComponent, SpinnerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
