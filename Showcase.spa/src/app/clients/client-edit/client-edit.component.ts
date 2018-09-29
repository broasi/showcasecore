import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { CategoryService } from '../../_services/category.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ClientService } from '../../_services/client.service';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteComponent } from '../../autocomplete/autocomplete.component';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @ViewChild('registerForm') form: any;
  editClientName : string;
  categories: any;
  categoriesTrim: any = [];
  model: any = {};
  ClientCategories: string[] = [];
  CategoriesSelected:  any = [];
  @ViewChild('cancelAuto') cancelAuto: AutocompleteComponent;

  constructor(private categoryService: CategoryService, private alertify: AlertifyService, private clientService: ClientService) {
   
  }

  ngOnInit() {
  }
  
  receiveMessage($event) {
    this.editClientName = $event
    this.ClientCategories = [];
    this.CategoriesSelected = [];
    this.categoriesTrim = [];
    this.model = {};
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
            this.clientService.getClient(this.editClientName).subscribe(data => {
              this.model = data;
                for (let j = 0; j <= this.categories.length - 1; j++) {                  
                  this.categoriesTrim.push({"category_Id" : this.categories[j]['category_Id'], "description" : this.categories[j]['description']});
                  for (let i = 0; i <= this.model.clientCategories.length - 1; i++) {
                      if (this.model.clientCategories[i]['category_Id'] === this.categories[j]['category_Id']) {
                        this.ClientCategories.push(this.categories[j]['description']); // display categories in plain text
                        this.CategoriesSelected.push(this.categories[j]['category_Id']);
                      }
                  }
                }
                this.model.clientCategories = this.CategoriesSelected;
            }, error => {
              this.alertify.error(error);
            });
            
    }, error => {
      this.alertify.error(error);
    });
  }

  update() {    
       this.CategoriesSelected = [];
       this.CategoriesSelected = this.model.clientCategories;   // contains the updated selected categories
       this.model.clientCategories = [];
       for (let i = 0; i <= this.CategoriesSelected.length  - 1; i++) {
         this.model.clientCategories.push({'category_Id' : this.CategoriesSelected[i]});
       }      
       this.clientService.UpdateClient(this.model,this.model.client_Id).subscribe(() => {        
       this.alertify.success('Client registration successful');
       this.cancel();
        // console.log(this.registerForm.controls['Category_Id'].value);
      }, error => {
        console.log(this.model);
        this.alertify.error(error);
      }
      );
  }

  cancel() {
    this.cancelAuto.listen();
    this.form.reset();
    this.ClientCategories = [];
  }
 
  delete() {
    this.alertify.confirm('Are you sure you want to delete this Client?', () => {
        this.clientService.deleteClient(this.model.client_Id).subscribe(() => {          
          this.alertify.success('Client has been deleted');
          this.cancel();
        }, error => {
          this.alertify.error('Failed to delete Client');
        });
    });
  }
}
