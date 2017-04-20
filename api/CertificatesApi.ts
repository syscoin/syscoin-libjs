import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class CertificatesApi {
    protected basePath = 'http://localhost:8001';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * scan and filter certs certfilter \&quot;\&quot; 5 &#x3D; list certs updated in last 5 blocks certfilter \&quot;^cert\&quot; &#x3D; list all certs starting with \&quot;cert\&quot; certfilter 36000 0 0 stat &#x3D; display stats (number of certs) on active certs
     * @param regexp apply [regexp] on certes, empty means all certes
     * @param from show results from number [from]
     * @param certfilter shows all certs that are safe to display (not on the ban list)
     * @param safesearch shows all certs that are safe to display (not on the ban list)
     * @param category category you want to search in, empty for all
     */
    public certfilter (regexp?: string, from?: string, certfilter?: string, safesearch?: string, category?: string, extraHttpRequestParams?: any ) : Observable<Array<models.CertListEntry>> {
        const path = this.basePath + '/certfilter';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (regexp !== undefined) {
            queryParameters.set('regexp', regexp);
        }

        if (from !== undefined) {
            queryParameters.set('from', from);
        }

        if (certfilter !== undefined) {
            queryParameters.set('certfilter', certfilter);
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
     * List all stored values of an cert.
     * @param certname 
     */
    public certhistory (certname: string, extraHttpRequestParams?: any ) : Observable<Array<models.CertHistoryEntry>> {
        const path = this.basePath + '/certhistory';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'certname' is set
        if (!certname) {
            throw new Error('Missing required parameter certname when calling certhistory');
        }
        if (certname !== undefined) {
            queryParameters.set('certname', certname);
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
     * Show stored values of a single certificate.
     * @param guid 
     */
    public certinfo (guid: string, extraHttpRequestParams?: any ) : Observable<models.Cert> {
        const path = this.basePath + '/certinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'guid' is set
        if (!guid) {
            throw new Error('Missing required parameter guid when calling certinfo');
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
     * List certificates that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in certificates.
     * @param aliases 
     * @param cert 
     * @param privatekey 
     */
    public certlist (aliases?: Array<string>, cert?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.CertListEntry>> {
        const path = this.basePath + '/certlist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliases !== undefined) {
            queryParameters.set('aliases', aliases);
        }

        if (cert !== undefined) {
            queryParameters.set('cert', cert);
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
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certnew (request: models.CertNewRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/certnew';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling certnew');
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
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certtransfer (request: models.CertTransferRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/certtransfer';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling certtransfer');
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
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certupdate (request: models.CertUpdateRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/certupdate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling certupdate');
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
