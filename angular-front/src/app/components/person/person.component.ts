import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from '../../services/person/person.service';
import {Person} from '../../models/person';
import {Vehicle} from '../../models/vehicle';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Input() vehicle: Vehicle;

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
  }

}
