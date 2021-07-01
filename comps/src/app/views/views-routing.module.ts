import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';

const routes: Routes = [
  //routing rule - saying anytime we are on elements url path - show Elements home component
  { path: '', component: ViewsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
