import { Routes, RouterModule } from '@angular/router';
import { HomeSpaComponent } from '../home-spa/home-spa.component';
import { NavComponent } from '../nav/nav.component';
import { AuthGuard } from '../_guards/auth.guard';
import { ClientHomeComponent } from '../clients/client-home/client-home.component';
import { ClientListComponent } from '../clients/client-list/client-list.component';
import { ClientSearchComponent } from '../clients/client-search/client-search.component';
import { RegisterComponent } from '../register/register.component';

export const appRoutes: Routes = [
  { path: 'home-spa', component: HomeSpaComponent},  
  { path: 'clients', component: ClientHomeComponent},  
  { path: 'clients/:id', component: ClientHomeComponent },           
  { path: 'clients-list', component: ClientListComponent},  
  { path: 'clients-search', component: ClientSearchComponent},  
  { path: 'user-register', component: RegisterComponent},  
  // {
  //    path: '',
  //    runGuardsAndResolvers: 'always',
  //    canActivate: [AuthGuard],
  //    children: [
  //       //  { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
  //       //  { path: 'member/edit', component: MemberEditComponent,
  //       //    resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
  //       //  { path: 'messages', component: MessagesComponent},
  //       //  { path: 'lists', component: ListsComponent},        
  //    ]
  // },
   { path: 'nav', component: NavComponent },
   { path: '**', redirectTo: 'home-spa', pathMatch: 'full' }
 ];


