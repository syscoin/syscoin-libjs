import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class AliasesApi {
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
     * list affiliations with merchant offers.
     */
    public aliasaffiliates (extraHttpRequestParams?: any ) : Observable<Array<any>> {
        const path = this.basePath + '/aliasaffiliates';

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
     * Authenticates an alias with a provided password and returns the private key if successful. Warning: Calling this function over a public network can lead to someone reading your password/private key in plain text.
     * @param alias
     * @param password
     */
    public aliasauthenticate (alias: string, password: string, extraHttpRequestParams?: any ) : Observable<Array<any>> {
        const path = this.basePath + '/aliasauthenticate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'alias' is set
        if (!alias) {
            throw new Error('Missing required parameter alias when calling aliasauthenticate');
        }
        // verify required parameter 'password' is set
        if (!password) {
            throw new Error('Missing required parameter password when calling aliasauthenticate');
        }
        if (alias !== undefined) {
            queryParameters.set('alias', alias);
        }

        if (password !== undefined) {
            queryParameters.set('password', password);
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
     * Returns the total amount received by the given alias in transactions with at least minconf confirmations.
     * @param alias The syscoin alias for transactions
     * @param minconf ﻿Only include transactions confirmed at least this many times. default&#x3D;1.
     */
    public aliasbalance(alias: string, minconf: number, extraHttpRequestParams?: any): Observable<number> {
      const path = this.basePath + '/aliasbalance';

      let queryParameters = new URLSearchParams();
      let headerParams = this.defaultHeaders;
      if (alias !== undefined) {
        queryParameters.set('alias', alias);
      }

      if (minconf !== undefined) {
        queryParameters.set('minconf', minconf.toString());
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
     * Filter aliases [regexp] : apply [regexp] on aliases, empty means all aliases [from] : show results from this GUID [from], empty means first. [aliasfilter] : shows all aliases that are safe to display (not on the ban list) aliasfilter \&quot;\&quot; 5 &#x3D; list aliases updated in last 5 blocks aliasfilter \&quot;^alias\&quot; &#x3D; list all aliases starting with \&quot;alias\&quot; aliasfilter 36000 0 0 stat &#x3D; display stats (number of aliases) on active aliases
     * @param regexp apply [regexp] on aliases, empty means all aliases
     * @param from show results from this GUID [from], empty means first
     * @param safesearch shows all aliases that are safe to display (not on the ban list)
     */
    public aliasfilter (regexp?: string, from?: string, safesearch?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Alias>> {
        const path = this.basePath + '/aliasfilter';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;

        if (regexp !== undefined) {
            queryParameters.set('regexp', regexp);
        }

        if (from !== undefined) {
            queryParameters.set('from', from);
        }

        if (safesearch !== undefined) {
            queryParameters.set('safesearch', safesearch);
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
     * List all stored values of an alias.
     * @param aliasname
     */
    public aliashistory (aliasname: string, extraHttpRequestParams?: any ) : Observable<Array<models.AliasHistoryEntry>> {
        const path = this.basePath + '/aliashistory';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'aliasname' is set
        if (!aliasname) {
            throw new Error('Missing required parameter aliasname when calling aliashistory');
        }
        if (aliasname !== undefined) {
            queryParameters.set('aliasname', aliasname);
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
     * Show values of an alias.
     * @param aliasname
     */
    public aliasinfo (aliasname: string, extraHttpRequestParams?: any ) : Observable<models.Alias> {
        const path = this.basePath + '/aliasinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'aliasname' is set
        if (!aliasname) {
            throw new Error('Missing required parameter aliasname when calling aliasinfo');
        }
        if (aliasname !== undefined) {
            queryParameters.set('aliasname', aliasname);
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
     * List my own aliases.
     * @param aliasname Alias name to use as filter.
     */
    public aliaslist (aliasname?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Alias>> {
        const path = this.basePath + '/aliaslist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliasname !== undefined) {
            queryParameters.set('aliasname', aliasname);
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
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public aliasnew (request: models.AliasNewRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/aliasnew';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aliasnew');
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
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    public aliaspay(request: models.AliasPayRequest, extraHttpRequestParams?: any): Observable<Array<string>> {
      const path = this.basePath + '/aliaspay';

      let queryParameters = new URLSearchParams();
      let headerParams = this.defaultHeaders;
      // verify required parameter 'request' is set
      if (!request) {
        throw new Error('Missing required parameter request when calling aliasnew');
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
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    public aliasupdate (request: models.AliasUpdateRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/aliasupdate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling aliasupdate');
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
