import { Component, OnInit, ElementRef, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { ClientService } from '../_services/client.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit {    
    @Output() autoClientName = new EventEmitter<string>();
    private alertify: AlertifyService;
    public clients: any = [];
    public query = '';
    public filteredList = [];
    public elementRef;

    constructor(private router: Router, route: ActivatedRoute, myElement: ElementRef, private clientService: ClientService) {
        route.params.subscribe(val => {
            this.listen();
            this.elementRef = myElement;      
        });                            
    }

    ngOnInit() {      
    }

    listen() {
        this.query = '';
        this.clients = [];
        this.getClients();        
    }

    filter() {      
      if (this.query !== ""){
          this.filteredList = this.clients.filter(function(el){
              return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }.bind(this));
      }else{
          this.filteredList = [];
      }
    }
 
    select(item){
        this.query = item;
        this.filteredList = [];
    }

    getClients() {
        this.clientService.listClients().subscribe(data => {        
            for (let j = 0; j <= data.length - 1; j++) {
                this.clients.push(data[j]['name']+' * '+data[j]['client_Id']);
             }
           }, error => {
             this.alertify.error(error);
           });       
     }

     searchClient() {
        this.autoClientName.emit(this.query)        
     }     
     
}
