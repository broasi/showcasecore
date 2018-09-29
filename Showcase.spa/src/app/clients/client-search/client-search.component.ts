import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../_services/client.service';
import { ClientPipe } from '../../pipe/client-pipe';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  public filteredName : any;
  public clients: any = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
    this.filteredName = '';
  }

  
  getClients() {
    this.clientService.listClients().subscribe(data => {
       this.clients = data
      }
    )
  }
}
