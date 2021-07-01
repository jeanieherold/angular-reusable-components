import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UiModulesRoutingModule } from './ui-modules-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    UiModulesRoutingModule,
    SharedModule
  ]
})
export class UiModulesModule { }
