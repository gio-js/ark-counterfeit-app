import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglebookPage } from './singlebook.page';

const routes: Routes = [
  {
    path: '',
    component: SinglebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglebookPageRoutingModule {}
