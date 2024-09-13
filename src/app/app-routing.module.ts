import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact-data',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'local-storage',
    loadChildren: () => import('./paginas/local-storage/local-storage.module').then( m => m.LocalStoragePageModule)
  },
  {
    path: 'contact-data',
    loadChildren: () => import('./paginas/contact-data/contact-data.module').then( m => m.ContactDataPageModule)
  },
  {
    path: 'edit-contact',
    loadChildren: () => import('./paginas/edit-contact/edit-contact.module').then( m => m.EditContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
