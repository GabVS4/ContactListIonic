import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.page.html',
  styleUrls: ['./contact-data.page.scss'],
})
export class ContactDataPage {

  public contatos: Array<{ id: string, nome: string, numero: string, email: string }> = [];
  public filteredContatos: Array<{ id: string, nome: string, numero: string, email: string }> = [];
  public searchTerm: string = '';

  constructor(private nav: NavController, private router: Router) { }

  ionViewWillEnter() {
    this.loadContatos();
  }

  loadContatos() {
    const storedContatos = window.localStorage.getItem('Contatos');
    if (storedContatos) {
      this.contatos = JSON.parse(storedContatos);
      this.filteredContatos = [...this.contatos];
    }
  }

  filterContacts(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (!searchTerm) {
      this.filteredContatos = [...this.contatos];
      return;
    }

    this.filteredContatos = this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(searchTerm) || 
             contato.numero.includes(searchTerm) || 
             contato.email.toLowerCase().includes(searchTerm);
    });
  }

  editContato(id: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: id }
    };
    this.router.navigate(['edit-contact'], navigationExtras);
  }

  deleteContato(id: string) {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    contatos = contatos.filter((contato: any) => contato.id !== id);
    window.localStorage.setItem('Contatos', JSON.stringify(contatos));
    this.loadContatos();
  }

  public back() {
    this.nav.navigateForward('local-storage');
  }
}
