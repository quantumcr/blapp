import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortinaPage } from './cortina.page';

const routes: Routes = [
  {
    path: '',
    component: CortinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortinaPageRoutingModule {}
