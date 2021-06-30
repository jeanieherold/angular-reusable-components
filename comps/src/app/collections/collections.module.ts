import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  //only need to export if being used directly in another module - we are using on collections path only
  exports: []
})
export class CollectionsModule { }
