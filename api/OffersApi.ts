import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class OffersApi {
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
     * Accept&amp;Pay for a confirmed offer.
     * @param request
     */
    public offeraccept (request: models.OfferAcceptRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offeraccept';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offeraccept');
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
     * Acknowledge offer payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param offerguid
     * @param offeracceptguid
     */
    public offeracceptacknowledge (offerguid: string, offeracceptguid: string, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offeracceptacknowledge';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'offerguid' is set
        if (!offerguid) {
            throw new Error('Missing required parameter offerguid when calling offeracceptacknowledge');
        }
        // verify required parameter 'offeracceptguid' is set
        if (!offeracceptguid) {
            throw new Error('Missing required parameter offeracceptguid when calling offeracceptacknowledge');
        }
        if (offerguid !== undefined) {
            queryParameters.set('offerguid', offerguid);
        }

        if (offeracceptguid !== undefined) {
            queryParameters.set('offeracceptguid', offeracceptguid);
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
     * Send feedback and rating for offer accept specified. Ratings are numbers from 1 to 5
     * @param offerguid
     * @param offeracceptguid
     * @param feedback
     * @param rating
     */
    public offeracceptfeedback (offerguid: string, offeracceptguid: string, feedback?: string, rating?: number, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offeracceptfeedback';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'offerguid' is set
        if (!offerguid) {
            throw new Error('Missing required parameter offerguid when calling offeracceptfeedback');
        }
        // verify required parameter 'offeracceptguid' is set
        if (!offeracceptguid) {
            throw new Error('Missing required parameter offeracceptguid when calling offeracceptfeedback');
        }
        if (offerguid !== undefined) {
            queryParameters.set('offerguid', offerguid);
        }

        if (offeracceptguid !== undefined) {
            queryParameters.set('offeracceptguid', offeracceptguid);
        }

        if (feedback !== undefined) {
            queryParameters.set('feedback', feedback);
        }

        if (rating !== undefined) {
            queryParameters.set('rating', JSON.stringify(rating));
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
     * list my offer accepts
     * @param aliases
     * @param acceptguid
     * @param privatekey
     */
    public offeracceptlist (aliases?: Array<string>, acceptguid?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.OfferAccept>> {
        const path = this.basePath + '/offeracceptlist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliases !== undefined) {
            queryParameters.set('aliases', JSON.stringify(aliases));
        }

        if (acceptguid !== undefined) {
            queryParameters.set('acceptguid', acceptguid);
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
     * Add to the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offeraddwhitelist (request: models.OfferAddWhitelistRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offeraddwhitelist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offeraddwhitelist');
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
     * Clear the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offerclearwhitelist (request: models.OfferClearWhitelistRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offerclearwhitelist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offerclearwhitelist');
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
     * scan and filter offers
     * @param regexp apply [regexp] on offeres, empty means all offers
     * @param from show results from number [from]
     * @param safesearch shows all offers that are safe to display (not on the ban list)
     * @param category Category you want to search in, empty for all
     */
    public offerfilter (regexp?: string, from?: string, safesearch?: string, category?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Offer>> {
        const path = this.basePath + '/offerfilter';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;

        if (regexp !== undefined) {
            queryParameters.set('regexp', regexp);
        }

        if (from !== undefined) {
            queryParameters.set('from', JSON.stringify(from));
        }

        if (safesearch !== undefined) {
            queryParameters.set('safesearch', safesearch);
        }

        if (category !== undefined) {
            queryParameters.set('category', category);
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
     * List all stored values of an offer.
     * @param offer Offer GUID.
     */
    public offerhistory (offer: string, extraHttpRequestParams?: any ) : Observable<Array<models.OfferHistoryEntry>> {
        const path = this.basePath + '/offerhistory';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'offer' is set
        if (!offer) {
            throw new Error('Missing required parameter offer when calling offerhistory');
        }
        if (offer !== undefined) {
            queryParameters.set('offer', offer);
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
     * Show values of an offer.
     * @param guid
     */
    public offerinfo (guid: string, extraHttpRequestParams?: any ) : Observable<models.Offer> {
        const path = this.basePath + '/offerinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'guid' is set
        if (!guid) {
            throw new Error('Missing required parameter guid when calling offerinfo');
        }
        if (guid !== undefined) {
            queryParameters.set('guid', guid);
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
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offerlink (request: models.OfferLinkRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offerlink';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offerlink');
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
     * List offers that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in offer.
     * @param aliases
     * @param offer
     * @param privatekey
     */
    public offerlist (aliases?: Array<string>, offer?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Offer>> {
        const path = this.basePath + '/offerlist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliases !== undefined) {
            queryParameters.set('aliases', JSON.stringify(aliases));
        }

        if (offer !== undefined) {
            queryParameters.set('offer', offer);
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
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offernew (request: models.OfferNewRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offernew';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offernew');
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
     * Remove from the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offerremovewhitelist (request: models.OfferRemoveWhitelistRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offerremovewhitelist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offerremovewhitelist');
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
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public offerupdate (request: models.OfferUpdateRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/offerupdate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling offerupdate');
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
     * List all affiliates for this offer.
     * @param offerguid
     */
    public offerwhitelist (offerguid: string, extraHttpRequestParams?: any ) : Observable<Array<models.OfferWhitelistEntry>> {
        const path = this.basePath + '/offerwhitelist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'offerguid' is set
        if (!offerguid) {
            throw new Error('Missing required parameter offerguid when calling offerwhitelist');
        }
        if (offerguid !== undefined) {
            queryParameters.set('offerguid', offerguid);
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
