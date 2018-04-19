/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';
import { CustomQueryEncoderHelper }                          from '../encoder';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { ErrorResponse } from '../model/errorResponse';
import { VoteRawRequest } from '../model/voteRawRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MasternodesService {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders = new Headers();
    public configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * Imports keys from an Electrum wallet export file (.csv or .json).
     * @param filename (string, required) The Electrum wallet export file, should be in csv or json format
     * @param index (numeric, optional, default&#x3D;0) Rescan the wallet for transactions starting from this block index
     */
    public importelectrumwallet(filename: string, index?: number, extraHttpRequestParams?: RequestOptionsArgs): Observable<string> {
        return this.importelectrumwalletWithHttpInfo(filename, index, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Anonymous mixing and sending coins.
     * @param command &#39;start&#39; - Start Mixing &#39;stop&#39; - Stop mixing &#39;reset&#39; - Reset mixing 
     */
    public privatesend(command: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<string> {
        return this.privatesendWithHttpInfo(command, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Keep-alive message for masternode via TCP ping requests.
     * @param version Sentinel version in the form &#39;x.x.x&#39;
     */
    public sentinelping(version: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<boolean> {
        return this.sentinelpingWithHttpInfo(version, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Compile and relay a governance vote with provided external signature instead of signing vote internally.
     * @param request 
     */
    public voteraw(request: VoteRawRequest, extraHttpRequestParams?: RequestOptionsArgs): Observable<string> {
        return this.voterawWithHttpInfo(request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * 
     * Imports keys from an Electrum wallet export file (.csv or .json).
     * @param filename (string, required) The Electrum wallet export file, should be in csv or json format
     * @param index (numeric, optional, default&#x3D;0) Rescan the wallet for transactions starting from this block index
     
     */
    public importelectrumwalletWithHttpInfo(filename: string, index?: number, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (filename === null || filename === undefined) {
            throw new Error('Required parameter filename was null or undefined when calling importelectrumwallet.');
        }

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        if (filename !== undefined) {
            queryParameters.set('filename', <any>filename);
        }
        if (index !== undefined) {
            queryParameters.set('index', <any>index);
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/importelectrumwallet`, requestOptions);
    }

    /**
     * 
     * Anonymous mixing and sending coins.
     * @param command &#39;start&#39; - Start Mixing &#39;stop&#39; - Stop mixing &#39;reset&#39; - Reset mixing 
     
     */
    public privatesendWithHttpInfo(command: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (command === null || command === undefined) {
            throw new Error('Required parameter command was null or undefined when calling privatesend.');
        }

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        if (command !== undefined) {
            queryParameters.set('command', <any>command);
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/privatesend`, requestOptions);
    }

    /**
     * 
     * Keep-alive message for masternode via TCP ping requests.
     * @param version Sentinel version in the form &#39;x.x.x&#39;
     
     */
    public sentinelpingWithHttpInfo(version: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling sentinelping.');
        }

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        if (version !== undefined) {
            queryParameters.set('version', <any>version);
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/sentinelping`, requestOptions);
    }

    /**
     * 
     * Compile and relay a governance vote with provided external signature instead of signing vote internally.
     * @param request 
     
     */
    public voterawWithHttpInfo(request: VoteRawRequest, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling voteraw.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers.set('Content-Type', httpContentTypeSelected);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/voteraw`, requestOptions);
    }

}