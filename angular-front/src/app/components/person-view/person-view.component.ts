import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from '../../services/person/person.service';
import {Person} from '../../models/person';
import {Vehicle} from '../../models/vehicle';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {


  vehicles: Vehicle[];
  persons: Person[];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();

  }

  getPersons(): Person[] {
    this.personService
      .getPersonsFromServer()
      .subscribe(persons => this.persons = persons);

    return this.persons;
  }

}
