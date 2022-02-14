import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person/person.model';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  persons?: Person[];
  currentPerson: Person = {};
  currentIndex = -1;
  name = '';

  constructor(private personService: PersonService) { }
  
  ngOnInit(): void {
    this.retrievePersons();
  }
  retrievePersons(): void {
    this.personService.getAll()
      .subscribe({
        next: (data) => {
          this.persons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievePersons();
    this.currentPerson = {};
    this.currentIndex = -1;
  }
  setActivePerson(person: Person, index: number): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }
  searchPerson(): void {
    this.currentPerson = {};
    this.currentIndex = -1;
    this.personService.getByName(this.name)
      .subscribe({
        next: (data) => {
          this.persons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
