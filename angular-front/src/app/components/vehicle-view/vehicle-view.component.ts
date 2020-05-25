import { Component, OnInit } from '@angular/core';
import {VehicleService} from '../../services/vehicle/vehicle.service';
import {Vehicle} from '../../models/vehicle';
import {Person} from '../../models/person';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {

  }

}
