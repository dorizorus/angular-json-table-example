import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonService} from '../../../services/person/person.service';
import {Person} from '../../../interfaces/person';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  constructor(private http: HttpClient, private personService: PersonService ) { }

  persons: Person[];

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersonsFromServer()
      .subscribe(persons => this.persons = persons);
  }
}
