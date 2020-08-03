import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/restService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  public CreateProduct() {
    this.restService.RegisterProduct({
      ProductId: "00025-123456789-7",
      Description: "Maglia di cotone",
      ManufacturerAddressId: "AR96ntq6d7PkE1Ws3EKcQRK8QNqgVpMudz",
      Metadata:["rossa", "XL"]
    });
  }

}
