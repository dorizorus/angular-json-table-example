import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonViewComponent } from './components/person-view/person-view.component';
import { PersonService } from './services/person/person.service';
import { PersonSingularComponent } from './components/person-singular/person-singular.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';
import { VehicleViewComponent } from './components/vehicle-view/vehicle-view.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import {VehicleService} from './services/vehicle/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonSingularComponent,
    PersonComponent,
    VehicleViewComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
