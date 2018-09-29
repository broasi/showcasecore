import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../_services/category.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Category } from '../../_models/Category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  registerForm: FormGroup;
  category: Category;

  constructor(
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      Description: ['', Validators.required]      
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.category = Object.assign({}, this.registerForm.value);
      this.categoryService.register(this.category).subscribe(() => {
          this.alertify.success('Category registration successful');
          this.registerForm.reset();
       }, error => {
        this.alertify.error('There is some error');
       }
      );
    }
  }

  cancel() {
    this.registerForm.reset();
  }
}
