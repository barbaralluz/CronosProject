import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person/person.model';
import { PersonService } from 'src/app/services/person/person.service';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = {
    UserName: '',
    UserPassword: '',
    UserEmail: '',
    IsDeleted: false
  };

  submitted = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  savePerson(): void {
    const data = {
      UserName: this.person.UserName,
      UserPassword: this.person.UserPassword,
      UserEmail: this.person.UserEmail
    };
    this.personService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPerson(): void {
    this.submitted = false;
    this.person = {
      UserName: '',
      UserPassword: '',
      UserEmail: '',
      IsDeleted: false
    };
  }

}
