/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var GeneralApi = (function () {
            function GeneralApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://localhost:8000/';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            GeneralApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If &#39;account&#39; is specified (DEPRECATED), assign address to that account.
             * @param request
             */
            GeneralApi.prototype.addmultisigaddress = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/addmultisigaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling addmultisigaddress');
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
             * Reveals the private key corresponding to &#39;syscoinaddress&#39;. Then the importprivkey can be used with this output.
             * @param address The syscoin address for the private key
             */
            GeneralApi.prototype.dumpprivkey = function (address, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/dumpprivkey';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'address' is set
                if (!address) {
                    throw new Error('Missing required parameter address when calling dumpprivkey');
                }
                if (address !== undefined) {
                    queryParameters['address'] = address;
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
             * Dumps all wallet keys in a human-readable format.
             * @param filename The filename
             */
            GeneralApi.prototype.dumpwallet = function (filename, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/dumpwallet';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'filename' is set
                if (!filename) {
                    throw new Error('Missing required parameter filename when calling dumpwallet');
                }
                if (filename !== undefined) {
                    queryParameters['filename'] = filename;
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
             * DEPRECATED. Returns the account associated with the given address.
             * @param syscoinaddress The syscoin address for account lookup.
             */
            GeneralApi.prototype.getaccount = function (syscoinaddress, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getaccount';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'syscoinaddress' is set
                if (!syscoinaddress) {
                    throw new Error('Missing required parameter syscoinaddress when calling getaccount');
                }
                if (syscoinaddress !== undefined) {
                    queryParameters['syscoinaddress'] = syscoinaddress;
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
             * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
             * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
             */
            GeneralApi.prototype.getaccountaddress = function (account, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getaccountaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'account' is set
                if (!account) {
                    throw new Error('Missing required parameter account when calling getaccountaddress');
                }
                if (account !== undefined) {
                    queryParameters['account'] = account;
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
             * DEPRECATED. Returns the list of addresses for the given account.
             * @param account
             */
            GeneralApi.prototype.getaddressesbyaccount = function (account, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getaddressesbyaccount';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'account' is set
                if (!account) {
                    throw new Error('Missing required parameter account when calling getaddressesbyaccount');
                }
                if (account !== undefined) {
                    queryParameters['account'] = account;
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
             * If account is not specified, returns the server&#39;s total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \&quot;\&quot; is not the same as leaving the parameter out. The server total may be different to the balance in the default \&quot;\&quot; account.
             * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
             * @param minconf Only include transactions confirmed at least this many times.
             * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
             */
            GeneralApi.prototype.getbalance = function (account, minconf, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getbalance';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (account !== undefined) {
                    queryParameters['account'] = account;
                }
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * Returns an object containing various state info.
             */
            GeneralApi.prototype.getinfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getinfo';
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
             * Returns a json object containing mining-related information.
             */
            GeneralApi.prototype.getmininginfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getmininginfo';
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
             * Returns a new Syscoin address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
             * @param request
             */
            GeneralApi.prototype.getnewaddress = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getnewaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
             * Returns data about each connected network node as a json array of objects.
             */
            GeneralApi.prototype.getpeerinfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getpeerinfo';
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
             * DEPRECATED. Returns the total amount received by addresses with &lt;account&gt; in transactions with at least [minconf] confirmations.
             * @param account The selected account, may be the default account using \&quot;\&quot;.
             * @param minconf Only include transactions confirmed at least this many times.
             */
            GeneralApi.prototype.getreceivedbyaccount = function (account, minconf, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getreceivedbyaccount';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'account' is set
                if (!account) {
                    throw new Error('Missing required parameter account when calling getreceivedbyaccount');
                }
                if (account !== undefined) {
                    queryParameters['account'] = account;
                }
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
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
             * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
             * @param syscoinaddress The syscoin address for transactions.
             * @param minconf Only include transactions confirmed at least this many times.
             */
            GeneralApi.prototype.getreceivedbyaddress = function (syscoinaddress, minconf, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getreceivedbyaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'syscoinaddress' is set
                if (!syscoinaddress) {
                    throw new Error('Missing required parameter syscoinaddress when calling getreceivedbyaddress');
                }
                if (syscoinaddress !== undefined) {
                    queryParameters['syscoinaddress'] = syscoinaddress;
                }
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
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
             * Get detailed information about in-wallet transaction &lt;txid&gt;
             * @param txid The transaction id
             * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
             */
            GeneralApi.prototype.gettransaction = function (txid, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/gettransaction';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'txid' is set
                if (!txid) {
                    throw new Error('Missing required parameter txid when calling gettransaction');
                }
                if (txid !== undefined) {
                    queryParameters['txid'] = txid;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * Returns the server&#39;s total unconfirmed balance
             */
            GeneralApi.prototype.getunconfirmedbalance = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getunconfirmedbalance';
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
             * Returns a new Syscoin (starts with 1) address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
             * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
             */
            GeneralApi.prototype.getv2address = function (account, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getv2address';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (account !== undefined) {
                    queryParameters['account'] = account;
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
             * Returns an object containing various wallet state info.
             */
            GeneralApi.prototype.getwalletinfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/getwalletinfo';
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
             * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
             * @param request
             */
            GeneralApi.prototype.importaddress = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/importaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling importaddress');
                }
                var httpRequestParams = {
                    method: 'GET',
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
             * Adds a private key (as returned by dumpprivkey) to your wallet.
             * @param request
             */
            GeneralApi.prototype.importprivkey = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/importprivkey';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling importprivkey');
                }
                var httpRequestParams = {
                    method: 'GET',
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
             * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
             * @param request
             */
            GeneralApi.prototype.importpubkey = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/importpubkey';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling importpubkey');
                }
                var httpRequestParams = {
                    method: 'GET',
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
             * Imports keys from a wallet dump file (see dumpwallet).
             * @param request
             */
            GeneralApi.prototype.importwallet = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/importwallet';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling importwallet');
                }
                var httpRequestParams = {
                    method: 'GET',
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
             * DEPRECATED. Returns Object that has account names as keys, account balances as values.
             * @param minconf Only include transactions with at least this many confirmations
             * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
             */
            GeneralApi.prototype.listaccounts = function (minconf, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listaccounts';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
             */
            GeneralApi.prototype.listaddressgroupings = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listaddressgroupings';
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
             * DEPRECATED. List balances by account.
             * @param minconf Only include transactions confirmed at least this many times.
             * @param includeempty Whether to include accounts that haven&#39;t received any payments.
             * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
             */
            GeneralApi.prototype.listreceivedbyaccount = function (minconf, includeempty, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listreceivedbyaccount';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
                }
                if (includeempty !== undefined) {
                    queryParameters['includeempty'] = includeempty;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * List balances by receiving address.
             * @param minconf Only include transactions confirmed at least this many times.
             * @param includeempty Whether to include accounts that haven&#39;t received any payments.
             * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
             */
            GeneralApi.prototype.listreceivedbyaddress = function (minconf, includeempty, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listreceivedbyaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (minconf !== undefined) {
                    queryParameters['minconf'] = minconf;
                }
                if (includeempty !== undefined) {
                    queryParameters['includeempty'] = includeempty;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * Get all transactions in blocks since block [blockhash], or all transactions if omitted
             * @param blockhash The block hash to list transactions since
             * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
             * @param targetConfirmations
             */
            GeneralApi.prototype.listsinceblock = function (blockhash, includeWatchonly, targetConfirmations, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listsinceblock';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (blockhash !== undefined) {
                    queryParameters['blockhash'] = blockhash;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
                }
                if (targetConfirmations !== undefined) {
                    queryParameters['target-confirmations'] = targetConfirmations;
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
             * Returns up to &#39;count&#39; most recent transactions skipping the first &#39;from&#39; transactions for account &#39;account&#39;.
             * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
             * @param count The number of transactions to return
             * @param from The number of transactions to skip
             * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
             */
            GeneralApi.prototype.listtransactions = function (account, count, from, includeWatchonly, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/listtransactions';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (account !== undefined) {
                    queryParameters['account'] = account;
                }
                if (count !== undefined) {
                    queryParameters['count'] = count;
                }
                if (from !== undefined) {
                    queryParameters['from'] = from;
                }
                if (includeWatchonly !== undefined) {
                    queryParameters['includeWatchonly'] = includeWatchonly;
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
             * DEPRECATED. Move a specified amount from one account in your wallet to another.
             * @param request
             */
            GeneralApi.prototype.move = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/move';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling move');
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
             * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            GeneralApi.prototype.sendfrom = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/sendfrom';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling sendfrom');
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
             * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            GeneralApi.prototype.sendmany = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/sendmany';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling sendmany');
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
             * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            GeneralApi.prototype.sendtoaddress = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/sendtoaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling sendtoaddress');
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
             * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
             * @param request
             */
            GeneralApi.prototype.signmessage = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/signmessage';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling signmessage');
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
             * Return information about the given syscoin address.
             * @param syscoinaddress
             */
            GeneralApi.prototype.validateaddress = function (syscoinaddress, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/validateaddress';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'syscoinaddress' is set
                if (!syscoinaddress) {
                    throw new Error('Missing required parameter syscoinaddress when calling validateaddress');
                }
                if (syscoinaddress !== undefined) {
                    queryParameters['syscoinaddress'] = syscoinaddress;
                }
                var httpRequestParams = {
                    method: 'POST',
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
             * Verify a signed message
             * @param syscoinaddress The syscoin address to use for the signature.
             * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
             * @param message The message that was signed.
             */
            GeneralApi.prototype.verifymessage = function (syscoinaddress, signature, message, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/verifymessage';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'syscoinaddress' is set
                if (!syscoinaddress) {
                    throw new Error('Missing required parameter syscoinaddress when calling verifymessage');
                }
                // verify required parameter 'signature' is set
                if (!signature) {
                    throw new Error('Missing required parameter signature when calling verifymessage');
                }
                // verify required parameter 'message' is set
                if (!message) {
                    throw new Error('Missing required parameter message when calling verifymessage');
                }
                if (syscoinaddress !== undefined) {
                    queryParameters['syscoinaddress'] = syscoinaddress;
                }
                if (signature !== undefined) {
                    queryParameters['signature'] = signature;
                }
                if (message !== undefined) {
                    queryParameters['message'] = message;
                }
                var httpRequestParams = {
                    method: 'POST',
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
             * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
             */
            GeneralApi.prototype.walletlock = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/walletlock';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                var httpRequestParams = {
                    method: 'POST',
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
             * Stores the wallet decryption key in memory for &#39;timeout&#39; seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
             * @param request
             */
            GeneralApi.prototype.walletpassphrase = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/walletpassphrase';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling walletpassphrase');
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
             * Changes the wallet passphrase from &#39;oldpassphrase&#39; to &#39;newpassphrase&#39;.
             * @param request
             */
            GeneralApi.prototype.walletpassphrasechange = function (request, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/walletpassphrasechange';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'request' is set
                if (!request) {
                    throw new Error('Missing required parameter request when calling walletpassphrasechange');
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
            GeneralApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
            return GeneralApi;
        })();
        Client.GeneralApi = GeneralApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
//# sourceMappingURL=GeneralApi.js.map