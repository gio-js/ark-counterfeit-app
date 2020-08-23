import { UtilService } from './../services/utilService';
import { Identities } from '@arkecosystem/crypto';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { StorageService } from '../services/storageService';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-singlebook',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  public codiceProdotto: string;
  public indirizzoDestinatario: string;

  constructor(
    private restService: RestService,
    private storageService: StorageService,
    private utilService: UtilService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async Send() {
    await this.restService.TransferProduct(this.storageService.LoginPassphrase, {
      ProductId: this.codiceProdotto,
      RecipientAddressId: this.indirizzoDestinatario,
      SenderAddressId: Identities.Address.fromPassphrase(this.storageService.LoginPassphrase)
    }).then(async data => {

      if (data.IsSuccess) {
        const alert = await this.alertCtrl.create({
          header: 'OK',
          subHeader: 'Prodotto ' + this.codiceProdotto + ' trasferito correttamente all\'indirizzo: ' + this.indirizzoDestinatario + '.',
          buttons: ['Dismiss']
        });
        alert.present();
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Errore',
          subHeader: 'Errore durante il trasferimento del prodotto: ' + JSON.stringify(data.Data),
          buttons: ['Dismiss']
        });
        alert.present();
      }
    });
  }

  // AaGU6K7R7VYuEwLosPAkrPXGR6DWnbysxG (gio)
  loginInfos() {
    const address = Identities.Address.fromPassphrase(this.storageService.LoginPassphrase);
    return `${address} (${this.storageService.LoginUsername})`;
  }

  copyLoginAddress() {
    const address = Identities.Address.fromPassphrase(this.storageService.LoginPassphrase);
    this.utilService.copyToClipboard(address);
  }

}
