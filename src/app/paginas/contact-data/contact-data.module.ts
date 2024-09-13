import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactDataPageRoutingModule } from './contact-data-routing.module';

import { ContactDataPage } from './contact-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactDataPageRoutingModule
  ],
  declarations: [ContactDataPage]
})
export class ContactDataPageModule {}
