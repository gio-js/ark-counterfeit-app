import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  public username: string;
  public generatedPassphrase: string = 'Passphrase generata (readonly)';

    constructor(private restService: RestService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  public async CreaWallet() {
    if (!this.username) {
      const alert = await this.alertCtrl.create({
        header: 'Errore',
        subHeader: 'Inserisci un nome utente.',
        buttons: ['Dismiss']
      });
      alert.present();

      return;
    }

    const usernameExists = await this.restService.UsernameExists(this.username);
    if (usernameExists === true){
      const alert = await this.alertCtrl.create({
        header: 'Errore',
        subHeader: 'L\'utente esiste già.',
        buttons: ['Dismiss']
      });
      alert.present();

      return;
    }

    this.generatedPassphrase = 'Generazione in corso...';
    this.restService.CreateWallet(this.username).then(registerWalletResponse => {
      this.generatedPassphrase = registerWalletResponse.Data.Passphrase;
    });
  }
}
