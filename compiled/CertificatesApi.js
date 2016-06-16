/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var CertificatesApi = (function () {
            function CertificatesApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            CertificatesApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * scan and filter certs
             * @param regexp apply [regexp] on certes, empty means all certes
             * @param maxage look in last [maxage] blocks
             * @param from show results from number [from]
             * @param nb show [nb] results, 0 means all
             */
            CertificatesApi.prototype.certfilter = function (regexp, maxage, from, nb, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certfilter';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
             * List all stored values of an cert.
             * @param certname
             */
            CertificatesApi.prototype.certhistory = function (certname, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certhistory';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'certname' is set
                if (!certname) {
                    throw new Error('Missing required parameter certname when calling certhistory');
                }
                if (certname !== undefined) {
                    queryParameters['certname'] = certname;
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
             * Show stored values of a single certificate.
             * @param certname
             */
            CertificatesApi.prototype.certinfo = function (certname, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certinfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'certname' is set
                if (!certname) {
                    throw new Error('Missing required parameter certname when calling certinfo');
                }
                if (certname !== undefined) {
                    queryParameters['certname'] = certname;
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
             * Show stored values of a single certificate.
             */
            CertificatesApi.prototype.certlist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certlist';
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
             * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            CertificatesApi.prototype.certnew = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certnew';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling certnew');
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
             * scan all certs, starting at start-cert and returning a maximum number of entries (default 500)
             * @param startCert
             * @param maxReturned
             */
            CertificatesApi.prototype.certscan = function (startCert, maxReturned, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certscan';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (startCert !== undefined) {
                    queryParameters['start-cert'] = startCert;
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
             * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            CertificatesApi.prototype.certtransfer = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certtransfer';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling certtransfer');
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
             * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            CertificatesApi.prototype.certupdate = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/certupdate';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling certupdate');
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
            CertificatesApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return CertificatesApi;
        })();
        Client.CertificatesApi = CertificatesApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=CertificatesApi.js.map