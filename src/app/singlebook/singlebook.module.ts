import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglebookPageRoutingModule } from './singlebook-routing.module';

import { SinglebookPage } from './singlebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglebookPageRoutingModule
  ],
  declarations: [SinglebookPage]
})
export class SinglebookPageModule {}
