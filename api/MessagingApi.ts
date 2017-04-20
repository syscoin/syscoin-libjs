import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class MessagingApi {
    protected basePath = 'http://localhost:8001';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     *
     * Show stored values of a single message.
     * @param guid
     */
    public messageinfo (guid: string, extraHttpRequestParams?: any ) : Observable<models.Message> {
        const path = this.basePath + '/messageinfo';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'guid' is set
        if (!guid) {
            throw new Error('Missing required parameter guid when calling messageinfo');
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
     * Create a new Syscoin encrypted message.
     * @param request
     */
    public messagenew (request: models.MessageNewRequest, extraHttpRequestParams?: any ) : Observable<Array<string>> {
        const path = this.basePath + '/messagenew';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'request' is set
        if (!request) {
            throw new Error('Missing required parameter request when calling messagenew');
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
     * List received messages that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in message.
     * @param aliases
     * @param message
     * @param privatekey
     */
    public messagereceivelist (aliases?: Array<string>, message?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Message>> {
        const path = this.basePath + '/messagereceivelist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliases !== undefined) {
            queryParameters.set('aliases', JSON.stringify(aliases));
        }

        if (message !== undefined) {
            queryParameters.set('message', message);
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
     * List sent messages that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in message.
     * @param aliases
     * @param message
     * @param privatekey
     */
    public messagesentlist (aliases?: Array<string>, message?: string, privatekey?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Message>> {
        const path = this.basePath + '/messagesentlist';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (aliases !== undefined) {
            queryParameters.set('aliases', JSON.stringify(aliases));
        }

        if (message !== undefined) {
            queryParameters.set('message', message);
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

}
