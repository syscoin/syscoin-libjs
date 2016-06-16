/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var AliasesApi = (function () {
            function AliasesApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            AliasesApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * list affiliations with merchant offers.
             */
            AliasesApi.prototype.aliasaffiliates = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasaffiliates';
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
             * Filter aliases
             * @param regexp apply [regexp] on aliases, empty means all aliases
             * @param maxage look in last [maxage] blocks
             * @param from show results from number [from]
             * @param nb show [nb] results, 0 means all
             */
            AliasesApi.prototype.aliasfilter = function (regexp, maxage, from, nb, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasfilter';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'regexp' is set
                if (!regexp) {
                    throw new Error('Missing required parameter regexp when calling aliasfilter');
                }
                if (regexp !== undefined) {
                    queryParameters['regexp'] = regexp;
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
             * List all stored values of an alias.
             * @param aliasname
             */
            AliasesApi.prototype.aliashistory = function (aliasname, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliashistory';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'aliasname' is set
                if (!aliasname) {
                    throw new Error('Missing required parameter aliasname when calling aliashistory');
                }
                if (aliasname !== undefined) {
                    queryParameters['aliasname'] = aliasname;
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
             * Show values of an alias.
             * @param aliasname
             */
            AliasesApi.prototype.aliasinfo = function (aliasname, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasinfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'aliasname' is set
                if (!aliasname) {
                    throw new Error('Missing required parameter aliasname when calling aliasinfo');
                }
                if (aliasname !== undefined) {
                    queryParameters['aliasname'] = aliasname;
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
             * List my own aliases.
             * @param aliasname Alias name to use as filter.
             */
            AliasesApi.prototype.aliaslist = function (aliasname, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliaslist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (aliasname !== undefined) {
                    queryParameters['aliasname'] = aliasname;
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
             * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            AliasesApi.prototype.aliasnew = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasnew';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling aliasnew');
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
             * Scan all aliases, starting at start-name and returning a maximum number of entries (default 500)
             * @param startName
             * @param maxReturned
             */
            AliasesApi.prototype.aliasscan = function (startName, maxReturned, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasscan';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (startName !== undefined) {
                    queryParameters['start-name'] = startName;
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
            /**
             *
             * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            AliasesApi.prototype.aliasupdate = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/aliasupdate';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling aliasupdate');
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
            AliasesApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return AliasesApi;
        })();
        Client.AliasesApi = AliasesApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=AliasesApi.js.map