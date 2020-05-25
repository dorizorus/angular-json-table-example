import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() vehicle: Vehicle;

  vehicles: Vehicle[];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

}
