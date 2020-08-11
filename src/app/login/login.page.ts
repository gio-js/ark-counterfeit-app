import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { Router } from '@angular/router';
import { StorageService } from '../services/storageService';
import { Identities } from '@arkecosystem/crypto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private restService: RestService,
    private storageService: StorageService,
    private router: Router,
    private alertCtrl: AlertController) { }

  public username: string;
  public passphrase: string;

  ngOnInit() {
  }

  public async Login() {
    // username: gio3
    // password: flat health urge window citizen thing shock pudding wire flower apple engage

    const addressId = Identities.Address.fromPassphrase(this.passphrase);
    const result = await this.restService.Login(this.username, addressId);
    if (result.Data === true) {
      this.storageService.LoginPassphrase = this.passphrase;
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Errore',
        subHeader: 'Errore durante il login, username of passphrase non validi.',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  /*
  public CreateProduct() {
    const response = this.restService.RegisterProduct({
      ProductId: "00025-123456789-70",
      Description: "Maglia di cotone",
      ManufacturerAddressId: "AaRyknYVvNDTyUvpCQULtMVSwzmjWYqbKQ",
      Metadata:["rossa", "XL"]
    });

    console.log(response);
  }
  */

}
