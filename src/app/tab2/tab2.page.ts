import { StorageService } from './../services/storageService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../services/restService';
import { ProductResponse } from 'common/ark-counterfeit-common/src/rest/models';
import { Identities } from '@arkecosystem/crypto';
import { UtilService } from '../services/utilService';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public products: ProductResponse[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restService: RestService,
    private storageService: StorageService,
    private utilService: UtilService) { }


  ngOnInit(): void {
    this.route.queryParams
      //.filter(params => params.order)
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        const addressId = params.addressId;
        //console.log(this.order); // popular
        this.restService.GetProductsByManufacturer(addressId).then(data => {
          this.products = data;
        });
      }
    );
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
