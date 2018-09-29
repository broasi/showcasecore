import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../_services/client.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {
  public clients: any = [];
  public title : string; 
  public columnDefs : any; 
  public rowData : any;
  @ViewChild('agGrid') agGrid: AgGridNg2;  

  constructor(private clientService: ClientService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.listClients().subscribe(
      mydata => {
      this.clients = mydata;
      this.title = 'app';
  
      this.columnDefs = [
          {headerName: 'Id', field: 'client_Id', checkboxSelection: true },
          {headerName: 'Client Name', field: 'name' }
      ];
       
      this.rowData = this.clients;
      console.log(this.clients);  

      },
      error => {
        this.alertify.error(error);
      });
  }
 
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.client_Id + ' ' + node.name).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
  
}
