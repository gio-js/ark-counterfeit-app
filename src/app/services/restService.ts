import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginAccountRequest } from 'common/ark-counterfeit-common/src/rest/loginAccountRequest';
import { AnticounterfeitRegisterProductTransaction, RegisterProductBuilder } from 'common/ark-counterfeit-common';
import { RestTransactionContainer, RestResponse } from 'common/ark-counterfeit-common/src/rest/models';
import { VENDOR_FIELD } from 'common/ark-counterfeit-common/src/const';

@Injectable()
export class RestService {

    private baseUri: string = "http://localhost:8090/api/";
    constructor(private http: HttpClient) { }

    public async Login(username: string, passphrase: string): Promise<any> {
        return this.http.post(this.baseUri + "account/login", {
            Username: username,
            Passphrase: passphrase
        } as LoginAccountRequest);
    }

    private async GetNextNonce(addressId: string): Promise<RestResponse<string>> {
        return await this.http.get(this.baseUri + "manufacturer/nonce/" + addressId).toPromise<any>();
    }

    public async RegisterProduct(model: AnticounterfeitRegisterProductTransaction) {

        // const manufacturerAddressId: string = "AR96ntq6d7PkE1Ws3EKcQRK8QNqgVpMudz";
        const manufacturerPassphrase: string = "cactus learn salute duty taste admit vivid clutch act depth stool own";

        const nonce = (await this.GetNextNonce(model.ManufacturerAddressId)).Data;
        const builder = new RegisterProductBuilder();
        const transaction = builder
            .nonce(nonce)
            .product(model.ProductId, model.Description, model.ManufacturerAddressId, model.Metadata)
            .vendorField(VENDOR_FIELD)
            .recipientId(model.ManufacturerAddressId)
            .sign(manufacturerPassphrase)
            .getStruct();


        return this.http.post(this.baseUri + "products", {
            Asset: model,
            Nonce: nonce,
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        } as RestTransactionContainer<AnticounterfeitRegisterProductTransaction>);
    }
}