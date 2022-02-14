import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonsListComponent } from './components/person/persons-list/persons-list.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceListComponent } from './components/service/service-list/service-list.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { ServiceDetailsComponent } from './components/service/service-details/service-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'persons', component: PersonsListComponent },
  { path: 'persons/:id', component: PersonDetailsComponent },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'add-post', component: AddPostComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
