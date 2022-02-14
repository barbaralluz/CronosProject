import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service/service.model';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services?: Service[];
  currentService: Service = {};
  currentIndex = -1;

  constructor(private serviceService: ServiceService) { }
  
  ngOnInit(): void {
    this.retrieveServices();
  }
  retrieveServices(): void {
    this.serviceService.getAll()
      .subscribe({
        next: (data) => {
          this.services = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveServices();
    this.currentService = {};
    this.currentIndex = -1;
  }
  setActiveService(service: Service, index: number): void {
    this.currentService = service;
    this.currentIndex = index;
  }

}
