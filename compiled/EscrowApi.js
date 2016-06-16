/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var EscrowApi = (function () {
            function EscrowApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            EscrowApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            EscrowApi.prototype.escrowclaimrefund = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowclaimrefund';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling escrowclaimrefund');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: request,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            EscrowApi.prototype.escrowclaimrelease = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowclaimrelease';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling escrowclaimrelease');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: request,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * Accepts an offer that&#39;s in escrow, to complete the escrow process. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            EscrowApi.prototype.escrowcomplete = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowcomplete';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling escrowcomplete');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: request,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * scan and filter escrows
             * @param search Find arbiter or seller via alias name or an escrow GUID, empty means all escrows
             * @param maxage look in last [maxage] blocks
             * @param from show results from number [from]
             * @param nb show [nb] results, 0 means all
             */
            EscrowApi.prototype.escrowfilter = function (search, maxage, from, nb, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowfilter';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'search' is set
                if (!search) {
                    throw new Error('Missing required parameter search when calling escrowfilter');
                }
                if (search !== undefined) {
                    queryParameters['search'] = search;
                }
                if (maxage !== undefined) {
                    queryParameters['maxage'] = maxage;
                }
                if (from !== undefined) {
                    queryParameters['from'] = from;
                }
                if (nb !== undefined) {
                    queryParameters['nb'] = nb;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * List all stored values of an escrow.
             * @param escrow
             */
            EscrowApi.prototype.escrowhistory = function (escrow, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowhistory';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'escrow' is set
                if (!escrow) {
                    throw new Error('Missing required parameter escrow when calling escrowhistory');
                }
                if (escrow !== undefined) {
                    queryParameters['escrow'] = escrow;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * Show stored values of a single escrow
             * @param escrow
             */
            EscrowApi.prototype.escrowinfo = function (escrow, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowinfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'escrow' is set
                if (!escrow) {
                    throw new Error('Missing required parameter escrow when calling escrowinfo');
                }
                if (escrow !== undefined) {
                    queryParameters['escrow'] = escrow;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * list my own escrows
             */
            EscrowApi.prototype.escrowlist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowlist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * Create new arbitrated Syscoin escrow.
             * @param request
             */
            EscrowApi.prototype.escrownew = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrownew';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling escrownew');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: request,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             * scan all escrows, starting at start-escrow and returning a maximum number of entries (default 500)
             * @param startEscrow
             * @param maxReturned
             */
            EscrowApi.prototype.escrowscan = function (startEscrow, maxReturned, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/escrowscan';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (startEscrow !== undefined) {
                    queryParameters['start-escrow'] = startEscrow;
                }
                if (maxReturned !== undefined) {
                    queryParameters['max-returned'] = maxReturned;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            EscrowApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return EscrowApi;
        })();
        Client.EscrowApi = EscrowApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=EscrowApi.js.map