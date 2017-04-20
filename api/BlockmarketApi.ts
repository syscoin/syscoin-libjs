import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class BlockmarketApi {
    protected basePath = 'http://localhost:8001';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    public login (auth: string, extraHttpRequestParams?: any ) : Observable<models.LoginResponse> {
        const path = this.basePath + '/login';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'auth' is set
        if (!auth) {
            throw new Error('Missing required parameter auth when calling login');
        }
        if (auth !== undefined) {
            queryParameters.set('auth', auth);
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
