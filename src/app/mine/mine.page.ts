import { Identities } from '@arkecosystem/crypto';
import { StorageService } from './../services/storageService';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../services/restService';
import { ProductResponse } from 'common/ark-counterfeit-common/src/rest/models';

@Component({
  selector: 'app-mine',
  templateUrl: 'mine.page.html',
  styleUrls: ['mine.page.scss']
})
export class MinePage implements OnInit {

  public products: ProductResponse[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restService: RestService,
    private storageService: StorageService) { }


  ngOnInit(): void {
    const addressId = Identities.Address.fromPassphrase(this.storageService.LoginPassphrase);
    this.restService.GetProductsByOwner(addressId).then(data => {
      this.products = data;
    });
  }

}
