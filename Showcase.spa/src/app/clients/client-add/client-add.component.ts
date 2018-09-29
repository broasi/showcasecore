import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Client } from '../../_models/Client';
import { User } from '../../_models/User';
import { Category } from '../../_models/Category';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../_services/client.service';
import { CategoryService } from '../../_services/category.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  client:  Client;
  user: User;
  registerForm: FormGroup;
  // categoryDescription: string[];
  categories: any;
  // category_Ids:  number[];

  constructor(
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     this.categoryService.getCategories().subscribe(data => {
       this.categories = data;
     }, error => {
       this.alertify.error(error);
     });
    this.createRegisterForm();
    // this.category_Ids = [];
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Addr1: [''],
      Addr2: ['Yes'],
      City: [''],
      State: [''],
      Zip: ['', Validators.maxLength(15)],
      Tel: [''],
      Email: [''],
      Url: [''],
      Freetxt: [''],
      Blurb: [''],
      Category_Id: ['', Validators.required]
    });
  }

  // addCategory() {
  //   this.category_Ids.push(this.registerForm.controls['Category_IdLookup'].value);
  //   this.registerForm.controls['Category_Id'].setValue(this.category_Ids);
  //   this.categoryDescription.push(this.registerForm.controls['Category_IdLookup'].s);
  // }

  register() {
    if (this.registerForm.valid) {
      this.client = Object.assign({}, this.registerForm.value);
      this.clientService.register(this.client).subscribe(() => {
        this.alertify.success('Client registration successful');
        this.registerForm.reset();
        this.router.navigate(['/clients/' + Math.floor(Math.random() * 20)]);
        // console.log(this.registerForm.controls['Category_Id'].value);
      }, error => {
        this.alertify.error(error);
      } // , () => {
      //    this.authService.login(this.user).subscribe(() => {
      //    this.router.navigate(['/clients']);
      //   });
      //  }
      );
      }
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}

