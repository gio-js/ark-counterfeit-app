import { UtilService } from './../services/utilService';
import { Identities } from '@arkecosystem/crypto';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { StorageService } from '../services/storageService';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnticounterfeitRegisterManufacturerTransaction } from 'common/ark-counterfeit-common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public manufacturers: AnticounterfeitRegisterManufacturerTransaction[];

  constructor(
    private restService: RestService,
    private storageService: StorageService,
    private utilService: UtilService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.restService.GetManufacturers().then(data => {
      this.manufacturers = data;
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
