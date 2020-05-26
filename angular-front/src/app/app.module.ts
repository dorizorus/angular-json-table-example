import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonViewComponent } from './components/person/person-view/person-view.component';
import {PersonService} from './services/person/person.service';
import { PersonComponent } from './components/person/person/person.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
