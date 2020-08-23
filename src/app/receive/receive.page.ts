import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { StorageService } from '../services/storageService';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Identities } from '@arkecosystem/crypto';
import { UtilService } from '../services/utilService';

@Component({
  selector: 'app-singlebook',
  templateUrl: './receive.page.html',
  styleUrls: ['./receive.page.scss'],
})
export class ReceivePage implements OnInit {

  public codiceProdotto: string;

  constructor(
    private restService: RestService,
    private storageService: StorageService,
    private utilService: UtilService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
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

  async Receive() {
    await this.restService.ReceiveProduct(this.storageService.LoginPassphrase, {
      ProductId: this.codiceProdotto,
      RecipientAddressId: Identities.Address.fromPassphrase(this.storageService.LoginPassphrase)
    }).then(async data => {

      if (data.IsSuccess) {
        const alert = await this.alertCtrl.create({
          header: 'OK',
          subHeader: 'Ricezione del prodotto ' + this.codiceProdotto + ' avvenuta con successo.',
          buttons: ['Dismiss']
        });
        alert.present();
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Errore',
          subHeader: 'Errore durante la ricezione del prodotto: ' + JSON.stringify(data.Data),
          buttons: ['Dismiss']
        });
        alert.present();
      }
    });
  }

}
