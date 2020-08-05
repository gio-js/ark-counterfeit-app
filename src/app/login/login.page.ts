import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';
import { Router } from '@angular/router';
import { StorageService } from '../services/storageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private restService: RestService, 
    private storageService: StorageService, 
    private router: Router) { }

  public username: string;
  public passphrase: string;

  ngOnInit() {
  }

  public async Login() {
    const result = await this.restService.Login(this.username, this.passphrase);
    if (result.Data === true) {
      this.storageService.LoginPassphrase = this.passphrase;
      this.router.navigateByUrl('/tabs/tab1');
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
