import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service/service.model';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentService: Service = {
    Name: '',
    Description: ''
  };
  
  message = '';

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getService(this.route.snapshot.params["id"]);
    }
  }
  getService(id: string): void {
    this.serviceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentService = data[0];
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateService(): void {
    this.message = '';
    this.serviceService.update(this.currentService.Id, this.currentService)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Serviço atualizado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteService(): void {
    this.serviceService.delete(this.currentService.Id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/services']);
        },
        error: (e) => console.error(e)
      });
  }

}
