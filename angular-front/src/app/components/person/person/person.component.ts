import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../interfaces/person';
import {Vehicle} from '../../../interfaces/vehicle';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
