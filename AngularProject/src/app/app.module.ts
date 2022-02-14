import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { PersonDetailsComponent } from './components/person/person-details/person-details.component';
import { PersonsListComponent } from './components/person/persons-list/persons-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { ServiceDetailsComponent } from './components/service/service-details/service-details.component';
import { ServiceListComponent } from './components/service/service-list/service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonDetailsComponent,
    PersonsListComponent,
    HomeComponent,
    AddPostComponent,
    PostDetailsComponent,
    PostListComponent,
    AddServiceComponent,
    ServiceDetailsComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
