import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class GeneralApi {
    protected basePath = 'http://localhost:8001';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string, token: string) {
        if (basePath) {
            this.basePath = basePath;
        }

        if(token) {
          this.defaultHeaders.append("token", token);
        }
    }

    /**
     *
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If &#39;account&#39; is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    public addmultisigaddress (request: models.AddMultisigAddressRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/addmultisigaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling addmultisigaddress');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Reveals the private key corresponding to &#39;syscoinaddress&#39;. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    public dumpprivkey (address: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/dumpprivkey';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'address' is set
        if (!address) {
            throw new Error('Missing required parameter address when calling dumpprivkey');
        }
        if (address !== undefined) {
            queryParameters.set('address', address);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    public dumpwallet (filename: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/dumpwallet';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'filename' is set
        if (!filename) {
            throw new Error('Missing required parameter filename when calling dumpwallet');
        }
        if (filename !== undefined) {
            queryParameters.set('filename', filename);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    public getaccount (syscoinaddress: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/getaccount';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'syscoinaddress' is set
        if (!syscoinaddress) {
            throw new Error('Missing required parameter syscoinaddress when calling getaccount');
        }
        if (syscoinaddress !== undefined) {
            queryParameters.set('syscoinaddress', syscoinaddress);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    public getaccountaddress (account: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/getaccountaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'account' is set
        if (!account) {
            throw new Error('Missing required parameter account when calling getaccountaddress');
        }
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Returns the list of addresses for the given account.
     * @param account
     */
    public getaddressesbyaccount (account: string, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/getaddressesbyaccount';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'account' is set
        if (!account) {
            throw new Error('Missing required parameter account when calling getaddressesbyaccount');
        }
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * If account is not specified, returns the server&#39;s total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \&quot;\&quot; is not the same as leaving the parameter out. The server total may be different to the balance in the default \&quot;\&quot; account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    public getbalance (account?: string, minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/getbalance';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns an object containing various state info.
     */
    public getinfo (extraHttpRequestParams?: any ) : Observable<models.Info> {
        const path = this.basePath + '/getinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns a json object containing mining-related information.
     */
    public getmininginfo (extraHttpRequestParams?: any ) : Observable<models.MiningInfo> {
        const path = this.basePath + '/getmininginfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns a new Syscoin address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
     * @param request
     */
    public getnewaddress (request?: models.GetNewAddressRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/getnewaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns data about each connected network node as a json array of objects.
     */
    public getpeerinfo (extraHttpRequestParams?: any ) : Observable<models.PeerInfoResponse> {
        const path = this.basePath + '/getpeerinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Returns the total amount received by addresses with &lt;account&gt; in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    public getreceivedbyaccount (account: string, minconf?: number, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/getreceivedbyaccount';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'account' is set
        if (!account) {
            throw new Error('Missing required parameter account when calling getreceivedbyaccount');
        }
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     */
    public getreceivedbyaddress (syscoinaddress: string, minconf?: number, extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/getreceivedbyaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'syscoinaddress' is set
        if (!syscoinaddress) {
            throw new Error('Missing required parameter syscoinaddress when calling getreceivedbyaddress');
        }
        if (syscoinaddress !== undefined) {
            queryParameters.set('syscoinaddress', syscoinaddress);
        }

        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Get detailed information about in-wallet transaction &lt;txid&gt;
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    public gettransaction (txid: string, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<models.Transaction> {
        const path = this.basePath + '/gettransaction';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'txid' is set
        if (!txid) {
            throw new Error('Missing required parameter txid when calling gettransaction');
        }
        if (txid !== undefined) {
            queryParameters.set('txid', txid);
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns the server&#39;s total unconfirmed balance
     */
    public getunconfirmedbalance (extraHttpRequestParams?: any ) : Observable<number> {
        const path = this.basePath + '/getunconfirmedbalance';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns a new Syscoin (starts with 1) address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
     * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
     */
    public getv2address (account?: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/getv2address';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns an object containing various wallet state info.
     */
    public getwalletinfo (extraHttpRequestParams?: any ) : Observable<models.WalletInfo> {
        const path = this.basePath + '/getwalletinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns a new ZCash address for receiving payments in ZCash transaparent tokens. so payments received with the address will be credited to &#39;account&#39;.
     * @param address
     */
    public getzaddress (address: string, extraHttpRequestParams?: any ) : Observable<models.WalletInfo> {
        const path = this.basePath + '/getzaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'address' is set
        if (!address) {
            throw new Error('Missing required parameter address when calling getzaddress');
        }
        if (address !== undefined) {
            queryParameters.set('address', address);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    public importaddress (request: models.ImportAddressRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/importaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling importaddress');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    public importprivkey (request: models.ImportPrivKeyRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/importprivkey';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling importprivkey');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.
     * @param rawtransaction
     * @param txoutproof
     */
    public importprunedfunds (rawtransaction: string, txoutproof: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/importprunedfunds';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'rawtransaction' is set
        if (!rawtransaction) {
            throw new Error('Missing required parameter rawtransaction when calling importprunedfunds');
        }
        // verify required parameter 'txoutproof' is set
        if (!txoutproof) {
            throw new Error('Missing required parameter txoutproof when calling importprunedfunds');
        }
        if (rawtransaction !== undefined) {
            queryParameters.set('rawtransaction', rawtransaction);
        }

        if (txoutproof !== undefined) {
            queryParameters.set('txoutproof', txoutproof);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    public importpubkey (request: models.ImportPubKeyRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/importpubkey';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling importpubkey');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    public importwallet (request: models.ImportWalletRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/importwallet';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling importwallet');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    public listaccounts (minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/listaccounts';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    public listaddressgroupings (extraHttpRequestParams?: any ) : Observable<Array<Array<models.AddressGrouping>>> {
        const path = this.basePath + '/listaddressgroupings';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    public listreceivedbyaccount (minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<Array<models.Account>> {
        const path = this.basePath + '/listreceivedbyaccount';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        if (includeempty !== undefined) {
            queryParameters.set('includeempty', JSON.stringify(includeempty));
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    public listreceivedbyaddress (minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<Array<models.Account>> {
        const path = this.basePath + '/listreceivedbyaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (minconf !== undefined) {
            queryParameters.set('minconf', JSON.stringify(minconf));
        }

        if (includeempty !== undefined) {
            queryParameters.set('includeempty', JSON.stringify(includeempty));
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    public listsinceblock (blockhash?: string, includeWatchonly?: boolean, targetConfirmations?: number, extraHttpRequestParams?: any ) : Observable<Array<models.ListSinceBlockResponse>> {
        const path = this.basePath + '/listsinceblock';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (blockhash !== undefined) {
            queryParameters.set('blockhash', blockhash);
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        if (targetConfirmations !== undefined) {
            queryParameters.set('target-confirmations', JSON.stringify(targetConfirmations));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Returns up to &#39;count&#39; most recent transactions skipping the first &#39;from&#39; transactions for account &#39;account&#39;.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    public listtransactions (account?: string, count?: number, from?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any ) : Observable<Array<models.TransactionListEntry>> {
        const path = this.basePath + '/listtransactions';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (account !== undefined) {
            queryParameters.set('account', account);
        }

        if (count !== undefined) {
            queryParameters.set('count', JSON.stringify(count));
        }

        if (from !== undefined) {
            queryParameters.set('from', JSON.stringify(from));
        }

        if (includeWatchonly !== undefined) {
            queryParameters.set('includeWatchonly', JSON.stringify(includeWatchonly));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED. Move a specified amount from one account in your wallet to another.
     * @param request
     */
    public move (request: models.MoveRequest, extraHttpRequestParams?: any ) : Observable<boolean> {
        const path = this.basePath + '/move';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling move');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will effect wallet balances.
     * @param txid
     */
    public removeprunedfunds (txid: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/removeprunedfunds';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'txid' is set
        if (!txid) {
            throw new Error('Missing required parameter txid when calling removeprunedfunds');
        }
        if (txid !== undefined) {
            queryParameters.set('txid', txid);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public sendfrom (request: models.SendFromRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/sendfrom';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sendfrom');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public sendmany (request: models.SendManyRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/sendmany';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sendmany');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public sendtoaddress (request: models.SendToAddressRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/sendtoaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling sendtoaddress');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public signmessage (request: models.SignMessageRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/signmessage';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling signmessage');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN)
     * @param alias
     * @param hexstring
     */
    public syscoindecoderawtransaction (alias: string, hexstring: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/syscoindecoderawtransaction';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'alias' is set
        if (!alias) {
            throw new Error('Missing required parameter alias when calling syscoindecoderawtransaction');
        }
        // verify required parameter 'hexstring' is set
        if (!hexstring) {
            throw new Error('Missing required parameter hexstring when calling syscoindecoderawtransaction');
        }
        if (alias !== undefined) {
            queryParameters.set('alias', alias);
        }

        if (hexstring !== undefined) {
            queryParameters.set('hexstring', hexstring);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Sign inputs for raw transaction (serialized, hex-encoded) and sends them out to the network if signing is complete
     * @param hexstring
     */
    public syscoinsignrawtransaction (hexstring: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/syscoinsignrawtransaction';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'hexstring' is set
        if (!hexstring) {
            throw new Error('Missing required parameter hexstring when calling syscoinsignrawtransaction');
        }
        if (hexstring !== undefined) {
            queryParameters.set('hexstring', hexstring);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    public validateaddress (syscoinaddress: string, extraHttpRequestParams?: any ) : Observable<models.ValidateAddressResponse> {
        const path = this.basePath + '/validateaddress';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'syscoinaddress' is set
        if (!syscoinaddress) {
            throw new Error('Missing required parameter syscoinaddress when calling validateaddress');
        }
        if (syscoinaddress !== undefined) {
            queryParameters.set('syscoinaddress', syscoinaddress);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    public verifymessage (syscoinaddress: string, signature: string, message: string, extraHttpRequestParams?: any ) : Observable<boolean> {
        const path = this.basePath + '/verifymessage';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'syscoinaddress' is set
        if (!syscoinaddress) {
            throw new Error('Missing required parameter syscoinaddress when calling verifymessage');
        }
        // verify required parameter 'signature' is set
        if (!signature) {
            throw new Error('Missing required parameter signature when calling verifymessage');
        }
        // verify required parameter 'message' is set
        if (!message) {
            throw new Error('Missing required parameter message when calling verifymessage');
        }
        if (syscoinaddress !== undefined) {
            queryParameters.set('syscoinaddress', syscoinaddress);
        }

        if (signature !== undefined) {
            queryParameters.set('signature', signature);
        }

        if (message !== undefined) {
            queryParameters.set('message', message);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    public walletlock (extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/walletlock';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Stores the wallet decryption key in memory for &#39;timeout&#39; seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    public walletpassphrase (request: models.WalletPassphraseRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/walletpassphrase';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling walletpassphrase');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     * Changes the wallet passphrase from &#39;oldpassphrase&#39; to &#39;newpassphrase&#39;.
     * @param request
     */
    public walletpassphrasechange (request: models.WalletPassphraseChangeRequest, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/walletpassphrasechange';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling walletpassphrasechange');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
