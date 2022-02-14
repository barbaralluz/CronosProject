import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person/person.model';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentPerson: Person = {
    UserName: '',
    UserPassword: '',
    UserEmail: '',
    IsDeleted: false
  };
  
  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPerson(this.route.snapshot.params["id"]);
    }
  }
  getPerson(id: string): void {
    this.personService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPerson = data[0];
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateDeleted(status: boolean): void {
    let codeStatus = 0;
    if (status == true) {
      codeStatus = 1;
    }

    this.currentPerson.IsDeleted = status

    this.message = '';
    this.personService.update(this.currentPerson)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPerson.IsDeleted = status;
          this.message = res.message ? res.message : 'Situação atualizada com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }
  updatePerson(): void {
    this.message = '';
    this.personService.update(this.currentPerson)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Dados deste integrante da equipe atualizados com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }
  deletePerson(): void {
    this.personService.delete(this.currentPerson.Id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/persons']);
        },
        error: (e) => console.error(e)
      });
  }

}
