import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista de Contatos', url: '/contact-data', icon: 'person' },
    { title: 'Novo Contato', url: '/local-storage', icon: 'analytics' },
  ];
  public labels = [];
  constructor() {}
}
