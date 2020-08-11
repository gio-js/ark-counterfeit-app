import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReceiveRoutingModule } from './receive-routing.module';
import { ReceivePage } from './receive.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiveRoutingModule
  ],
  declarations: [ReceivePage]
})
export class ReceivePageModule {}
