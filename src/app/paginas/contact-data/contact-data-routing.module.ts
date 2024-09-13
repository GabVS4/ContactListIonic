import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDataPage } from './contact-data.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDataPageRoutingModule {}
