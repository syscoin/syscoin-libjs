/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var MessagingApi = (function () {
            function MessagingApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            MessagingApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * List all stored values of a message.
             * @param message
             */
            MessagingApi.prototype.messagehistory = function (message, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/messagehistory';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'message' is set
                if (!message) {
                    throw new Error('Missing required parameter message when calling messagehistory');
                }
                if (message !== undefined) {
                    queryParameters['message'] = message;
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
             * Show stored values of a single message.
             * @param guid
             */
            MessagingApi.prototype.messageinfo = function (guid, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/messageinfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'guid' is set
                if (!guid) {
                    throw new Error('Missing required parameter guid when calling messageinfo');
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
             * List my own messages
             */
            MessagingApi.prototype.messagelist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/messagelist';
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
             * Create a new Syscoin encrypted message.
             * @param request
             */
            MessagingApi.prototype.messagenew = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/messagenew';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling messagenew');
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
             * list my sent messages
             */
            MessagingApi.prototype.messagesentlist = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/messagesentlist';
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
            MessagingApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return MessagingApi;
        })();
        Client.MessagingApi = MessagingApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=MessagingApi.js.map