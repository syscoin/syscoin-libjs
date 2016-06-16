/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var OffersApi = (function () {
            function OffersApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            OffersApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * Accept&amp;Pay for a confirmed offer.
             * @param request
             */
            OffersApi.prototype.offeraccept = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offeraccept';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offeraccept');
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
             * list my offer accepts
             */
            OffersApi.prototype.offeracceptlist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offeracceptlist';
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
             * Add to the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offeraddwhitelist = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offeraddwhitelist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offeraddwhitelist');
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
             * Clear the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offerclearwhitelist = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerclearwhitelist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offerclearwhitelist');
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
             * scan and filter offeres
             * @param regexp apply [regexp] on offeres, empty means all offeres
             * @param maxage look in last [maxage] blocks
             * @param from show results from number [from]
             * @param nb show [nb] results, 0 means all
             */
            OffersApi.prototype.offerfilter = function (regexp, maxage, from, nb, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerfilter';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'regexp' is set
                if (!regexp) {
                    throw new Error('Missing required parameter regexp when calling offerfilter');
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
             * List all stored values of an offer.
             * @param offer
             */
            OffersApi.prototype.offerhistory = function (offer, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerhistory';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'offer' is set
                if (!offer) {
                    throw new Error('Missing required parameter offer when calling offerhistory');
                }
                if (offer !== undefined) {
                    queryParameters['offer'] = offer;
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
             * Show values of an offer.
             * @param guid
             */
            OffersApi.prototype.offerinfo = function (guid, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerinfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'guid' is set
                if (!guid) {
                    throw new Error('Missing required parameter guid when calling offerinfo');
                }
                if (guid !== undefined) {
                    queryParameters['guid'] = guid;
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
             * Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offerlink = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerlink';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offerlink');
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
             * list my own offers
             */
            OffersApi.prototype.offerlist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerlist';
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
             * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offernew = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offernew';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offernew');
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
             * Remove from the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offerremovewhitelist = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerremovewhitelist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offerremovewhitelist');
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
             * scan all offers, starting at start-offer and returning a maximum number of entries (default 500)
             * @param startOffer
             * @param maxReturned
             */
            OffersApi.prototype.offerscan = function (startOffer, maxReturned, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerscan';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (startOffer !== undefined) {
                    queryParameters['start-offer'] = startOffer;
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
             * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            OffersApi.prototype.offerupdate = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerupdate';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling offerupdate');
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
             * List all affiliates for this offer.
             * @param offerguid
             */
            OffersApi.prototype.offerwhitelist = function (offerguid, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/offerwhitelist';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'offerguid' is set
                if (!offerguid) {
                    throw new Error('Missing required parameter offerguid when calling offerwhitelist');
                }
                if (offerguid !== undefined) {
                    queryParameters['offerguid'] = offerguid;
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
            OffersApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return OffersApi;
        })();
        Client.OffersApi = OffersApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=OffersApi.js.map