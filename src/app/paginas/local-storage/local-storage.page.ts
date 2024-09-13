import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.page.html',
  styleUrls: ['./local-storage.page.scss'],
})
export class LocalStoragePage implements OnInit {

  protected idSave = '';
  protected nomeSave = '';
  protected numeroSave = '';
  protected emailSave = '';

  constructor(private nav: NavController) { }

  public localStoreSave(idSave: string, nomeSave: string, numeroSave: string, emailSave: string) {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');

    contatos.push({ id: idSave, nome: nomeSave, numero: numeroSave, email: emailSave });

    window.localStorage.setItem('Contatos', JSON.stringify(contatos));

    console.log('Salvando dados no local storage');
    this.idSave = '';
    this.nomeSave = '';
    this.numeroSave = '';
    this.emailSave = '';
  }

  public localStoreLoad() {
    this.nav.navigateForward('contact-data');
    console.log('Lendo dados do local storage');
  }

  ngOnInit() { }
}
