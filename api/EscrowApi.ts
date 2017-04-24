import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class EscrowApi {
    protected basePath = 'http://localhost:8001';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string, token: string) {
        if (basePath) {
            this.basePath = basePath;
        }

        this.defaultHeaders.append("Content-Type", "application/json");

        if(token) {
          this.defaultHeaders.append("token", token);
        }
    }

    /**
     *
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    public aliaspay (request: models.AliasPayRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/aliaspay';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aliaspay');
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
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     */
    public escrowacknowledge (escrowguid: string, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowacknowledge';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'escrowguid' is set
        if (!escrowguid) {
            throw new Error('Missing required parameter escrowguid when calling escrowacknowledge');
        }
        if (escrowguid !== undefined) {
            queryParameters.set('escrowguid', escrowguid);
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
     * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public escrowclaimrefund (request: models.EscrowClaimRefundRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowclaimrefund';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowclaimrefund');
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
     * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public escrowclaimrelease (request: models.EscrowClaimReleaseRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowclaimrelease';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowclaimrelease');
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
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    public escrowcompleterefund (request: models.EscrowCompleteRefundRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowcompleterefund';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowcompleterefund');
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
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    public escrowcompleterelease (request: models.EscrowCompleteReleaseRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowcompleterelease';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowcompleterelease');
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
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User Role is either &#39;buyer&#39;, &#39;seller&#39;, &#39;reseller&#39;, or &#39;arbiter&#39;. If you are the buyer, feedbackprimary is for seller and feedbacksecondary is for arbiter. If you are the seller, feedbackprimary is for buyer and feedbacksecondary is for arbiter. If you are the arbiter, feedbackprimary is for buyer and feedbacksecondary is for seller. If arbiter didn&#39;t do any work for this escrow you can leave his feedback empty and rating as a 0.
     * @param request
     */
    public escrowfeedback (request: models.EscrowFeedbackRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowfeedback';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowfeedback');
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
     * scan and filter escrows
     * @param regexp Apply [regexp] on escrows, empty means all escrows
     * @param from Show results from this GUID [from], 0 means first.
     */
    public escrowfilter (regexp: string, from?: number, extraHttpRequestParams?: any ) : Observable<Array<models.EscrowListEntry>> {
        const path = this.basePath + '/escrowfilter';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'regexp' is set
        if (!regexp) {
            throw new Error('Missing required parameter regexp when calling escrowfilter');
        }
        if (regexp !== undefined) {
            queryParameters.set('regexp', regexp);
        }

        if (from !== undefined) {
            queryParameters.set('from', JSON.stringify(from));
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
     * List all stored values of an escrow.
     * @param escrow GUID of escrow
     */
    public escrowhistory (escrow: string, extraHttpRequestParams?: any ) : Observable<Array<models.EscrowHistoryEntry>> {
        const path = this.basePath + '/escrowhistory';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'escrow' is set
        if (!escrow) {
            throw new Error('Missing required parameter escrow when calling escrowhistory');
        }
        if (escrow !== undefined) {
            queryParameters.set('escrow', escrow);
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
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    public escrowinfo (escrow: string, extraHttpRequestParams?: any ) : Observable<models.Escrow> {
        const path = this.basePath + '/escrowinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'escrow' is set
        if (!escrow) {
            throw new Error('Missing required parameter escrow when calling escrowinfo');
        }
        if (escrow !== undefined) {
            queryParameters.set('escrow', escrow);
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
     * List escrows that an array of aliases are involved in. Set of aliases to look up based on alias, and private key to decrypt any data found in escrow.
     * @param aliases List of aliases to display escrows from
     * @param escrow GUID of escrow
     * @param privatekey private key for decoding data
     */
    public escrowlist (aliases: Array<string>, escrow?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.EscrowListEntry>> {
        const path = this.basePath + '/escrowlist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'aliases' is set
        if (!aliases) {
            throw new Error('Missing required parameter aliases when calling escrowlist');
        }
        if (aliases !== undefined) {
            queryParameters.set('aliases', JSON.stringify(aliases));
        }

        if (escrow !== undefined) {
            queryParameters.set('escrow', escrow);
        }

        if (privatekey !== undefined) {
            queryParameters.set('privatekey', privatekey);
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
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    public escrownew (request: models.EscrowNewRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrownew';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrownew');
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
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either &#39;seller&#39; or &#39;arbiter&#39;. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    public escrowrefund (request: models.EscrowRefundRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowrefund';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowrefund');
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
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either &#39;buyer&#39; or &#39;arbiter&#39;. Enter in rawTx if this is an external payment release.
     * @param request
     */
    public escrowrelease (request: models.EscrowReleaseRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/escrowrelease';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling escrowrelease');
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
     * Generates a multisignature escrow transaction
     * @param request
     */
    public generateescrowmultisig (request: models.GenerateEscrowMultisigRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/generateescrowmultisig';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling generateescrowmultisig');
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
