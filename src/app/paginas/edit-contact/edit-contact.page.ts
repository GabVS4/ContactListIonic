import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {

  public contato: { id: string, nome: string, numero: string, email: string } = {
    id: '', nome: '', numero: '', email: ''
  };

  constructor(private route: ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
        this.contato = contatos.find((contato: any) => contato.id === params['id']);
      }
    });
  }

  saveContact() {
    let contatos = JSON.parse(window.localStorage.getItem('Contatos') || '[]');
    const index = contatos.findIndex((c: any) => c.id === this.contato.id);

    if (index !== -1) {
      contatos[index] = this.contato;
      window.localStorage.setItem('Contatos', JSON.stringify(contatos));
    }

    this.nav.navigateBack('contact-data');
  }

  cancel() {
    this.nav.navigateBack('contact-data');
  }
}
