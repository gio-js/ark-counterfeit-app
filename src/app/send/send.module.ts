import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SendRoutingModule } from './send-routing.module';
import { SendPage } from './send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendRoutingModule
  ],
  declarations: [SendPage]
})
export class SendPageModule {}
