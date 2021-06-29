import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  //only need to export if being used directly in another module - we are using on collections path only
  exports: []
})
export class CollectionsModule { }
