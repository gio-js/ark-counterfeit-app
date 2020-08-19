import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginAccountRequest } from 'common/ark-counterfeit-common/src/rest/loginAccountRequest';
import {
    AnticounterfeitRegisterProductTransaction,
    RegisterProductBuilder, RegisterProductTransaction, AnticounterfeitRegisterManufacturerTransaction, AnticounterfeitTransferProductTransaction, TransferProductBuilder, AnticounterfeitReceiveProductTransaction, ReceiveProductBuilder, ReceiveProductTransaction, TransferProductTransaction
} from 'common/ark-counterfeit-common';
import {
    RestTransactionContainer, RestResponse,
    RegisterAccountResponse, ManufacturerResponse, ProductResponse
} from 'common/ark-counterfeit-common/src/rest/models';
import { VENDOR_FIELD } from 'common/ark-counterfeit-common/src/const';
import { Managers, Transactions } from '@arkecosystem/crypto';

@Injectable()
export class RestService {

    private readonly network = 'testnet';
    private baseUri: string = 'http://80.211.134.204:8090/api/';

    constructor(private http: HttpClient) {
        this.initCrypto();
    }

    private initCrypto = async () => {
        Managers.configManager.setFromPreset(this.network);
        Managers.configManager.setHeight(1632); //await this.getLatestBlockHeight());
        Transactions.TransactionRegistry.registerTransactionType(RegisterProductTransaction);
        Transactions.TransactionRegistry.registerTransactionType(TransferProductTransaction);
        Transactions.TransactionRegistry.registerTransactionType(ReceiveProductTransaction);
    }

    private async GetNextNonce(addressId: string): Promise<RestResponse<string>> {
        return await this.http.get(this.baseUri + 'manufacturer/nonce/' + addressId).toPromise<any>();
    }

    public async RegisterProduct(model: AnticounterfeitRegisterProductTransaction): Promise<any> {

        // const manufacturerAddressId: string = "AR96ntq6d7PkE1Ws3EKcQRK8QNqgVpMudz";
        const manufacturerPassphrase: string = 'boat dizzy people marriage where betray yard oval split twice arm shove';

        const nonceResponse = await this.GetNextNonce(model.ManufacturerAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new RegisterProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.Description, model.ManufacturerAddressId, model.Metadata)
            .vendorField(VENDOR_FIELD)
            .recipientId(model.ManufacturerAddressId)
            .sign(manufacturerPassphrase)
            .getStruct();


        const response = await this.http.post(this.baseUri + 'products', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        } as RestTransactionContainer<AnticounterfeitRegisterProductTransaction>).toPromise<any>();

        return response;
    }

    public async TransferProduct(senderPassphrase: string, model: AnticounterfeitTransferProductTransaction): Promise<any> {
        const nonceResponse = await this.GetNextNonce(model.SenderAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new TransferProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.SenderAddressId, model.RecipientAddressId)
            .vendorField(VENDOR_FIELD)
            .recipientId(model.SenderAddressId)
            .sign(senderPassphrase)
            .getStruct();


        const response = await this.http.post(this.baseUri + 'products/transfer', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        } as RestTransactionContainer<AnticounterfeitTransferProductTransaction>).toPromise<any>();

        return response;
    }

    public async ReceiveProduct(senderPassphrase: string, model: AnticounterfeitReceiveProductTransaction): Promise<any> {
        const nonceResponse = await this.GetNextNonce(model.RecipientAddressId);
        console.log(JSON.stringify(nonceResponse));
        const nonce = nonceResponse.Data;
        const builder = new ReceiveProductBuilder();
        const transaction = builder
            .nonce(nonce.toString())
            .product(model.ProductId, model.RecipientAddressId)
            .vendorField(VENDOR_FIELD)
            .recipientId(model.RecipientAddressId)
            .sign(senderPassphrase)
            .getStruct();


        const response = await this.http.post(this.baseUri + 'products/receive', {
            Asset: model,
            Nonce: nonce.toString(),
            SenderPublicKey: transaction.senderPublicKey,
            Signature: transaction.signature,
            TransactionId: transaction.id
        } as RestTransactionContainer<AnticounterfeitReceiveProductTransaction>).toPromise<any>();

        return response;
    }

    public async Login(username: string, addressId: string): Promise<RestResponse<boolean>> {
        return await this.http.post(this.baseUri + 'account/login', {
            Username: username,
            AddressId: addressId
        }).toPromise<any>();
    }

    public async CreateWallet(username: string): Promise<RestResponse<RegisterAccountResponse>> {
        return await this.http.post(this.baseUri + 'account', {
            Username: username
        }).toPromise<any>();
    }

    public async UsernameExists(username: string): Promise<boolean> {
        const result: RestResponse<boolean> = await this.http.get(this.baseUri + 'account/' + username + '/exists').toPromise<any>();
        return result.Data;
    }

    public async GetManufacturers(): Promise<ManufacturerResponse[]> {
        const result: RestResponse<ManufacturerResponse[]> =
            await this.http.get(this.baseUri + 'manufacturer').toPromise<any>();
        return result.Data;
    }

    public async GetProductsByManufacturer(addressId: string): Promise<ProductResponse[]> {
        const result: RestResponse<ProductResponse[]> =
            await this.http.get(this.baseUri + 'products/manufacturer/' + addressId).toPromise<any>();
        return result.Data;
    }
}