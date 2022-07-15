import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { SearchItemsServiceService } from '../services/search-items-service.service';
import { SearchComponent } from './components/search/search.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { SearchListComponent } from './components/search-list/search-list.component';


@NgModule({
  declarations: [
    SearchComponent,
    ItemDetailsComponent,
    SearchListComponent
  ],
  providers: [
    SearchItemsServiceService
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchRoutingModule,
    HttpClientModule
  ]
})
export class SearchModule { }
