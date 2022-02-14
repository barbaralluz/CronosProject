import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service/service.model';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service: Service = {
    Name: '',
    Description: ''
  };

  submitted = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  saveService(): void {
    const data = {
      Name: this.service.Name,
      Description: this.service.Description
    };
    this.serviceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newService(): void {
    this.submitted = false;
    this.service = {
      Name: '',
      Description: ''
    };
  }


}
