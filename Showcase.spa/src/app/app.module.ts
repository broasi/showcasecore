import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './register/routes';
import { NavComponent } from './nav/nav.component';
import { HomeSpaComponent } from './home-spa/home-spa.component';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { UrlsService } from './_services/urls.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ClientHomeComponent } from './clients/client-home/client-home.component';
import { ClientAddComponent } from './clients/client-add/client-add.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClientPipe } from './pipe/client-pipe';
import { ClientSearchComponent } from './clients/client-search/client-search.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeSpaComponent,
      RegisterComponent,
      ClientAddComponent,
      ClientHomeComponent,
      ClientEditComponent,
      ClientListComponent,
      ClientSearchComponent,
      CategoryAddComponent,
      AutocompleteComponent,
      ClientPipe
   ],
   imports: [
    RouterModule.forRoot(appRoutes, {useHash : true}),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([AppComponent]),
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AlertifyService,
    UrlsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
