angular.module('angular-syscoin', [])
    .constant('RPC_CONFIG', {
        HOST: '127.0.0.1',
        PORT: '8336',
        USERNAME: 'rpcuser',
        PASSWORD: 'asdfkjdfhvkchbkhadkjwhekfbevsdbdcksjdhfksjkfklshfk'
    })
    .service('syscoinService', ['Base64', '$http', '$q', 'RPC_CONFIG', function(Base64, $http, $q, RPC_CONFIG) {

        var rpcUrl = "http://" + RPC_CONFIG.HOST + ":" + RPC_CONFIG.PORT + "/";
        var authdata = Base64.encode(RPC_CONFIG.USERNAME + ':' + RPC_CONFIG.PASSWORD);

        $http.defaults.headers.common['Authorization'] = getAuthHeader(); // jshint ignore:line

        function getAuthHeader() {
            return  'Basic ' + authdata;
        }

        //WALLET FUNCTIONS - basic stuff
        this.getInfo = function() {
            console.log("getInfo()");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"getinfo"
                }
            });

            return( request );
        }
        
        this.getNewAddress = function() {
            console.log("getnewaddress()");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"getnewaddress"
                }
            });

            return( request );
        }

        this.listTransactions = function() {
            console.log("listTransactions()");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method" : "listtransactions"
                }
            });

            return( request );
        }

        this.getRawTransaction = function(txid) {
            console.log("getRawTransaction( " + txid + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"getrawtransaction",
                    "params": [txid]
                }
            });

            return( request );
        }

        this.decodeRawTransaction = function(rawtx) {
            console.log("decodeRawTransaction( " + rawtx + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"decoderawtransaction",
                    "params":[rawtx]
                }
            });

            return( request );
        }


        //OFFERS
        this.offerNew = function(sysaddress, category, title, quantity, price, description ) {
            console.log("offerNew(" + category + ", " + title + ", " + quantity + ", " + price + ", " + description + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offernew",
                    "params":[sysaddress, category, title, quantity, price, description]
                }
            });

            return( request );
        }
        
        this.offerAccept = function(guid, quantity ) {
            console.log("offerAccept(" + guid + ", " + quantity + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offeraccept",
                    "params":[guid, quantity]
                }
            });

            return( request );
        }
        
        this.offerPay = function(guid, quantity, msg ) {
            console.log("offerAccept(" + guid + ", " + quantity + ", " + msg + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerpay",
                    "params":[guid, quantity, msg]
                }
            });

            return( request );
        }
        
        this.offerUpdate = function(guid, category, title, quantity, price, description ) {
            console.log("offerUpdate(" + category + ", " + title + ", " + quantity + ", " + price + ", " + description + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerupdate",
                    "params":[guid, category, title, quantity, price, description]
                }
            });

            return( request );
        }
        
        this.offerScan = function() {
            console.log("offerList()");
            var start = 0;
            var end = 1000;
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerscan",
                    "params":[start, end]
                }
            });

            return( request );
        }

        this.offerList = function() {
            console.log("offerList()");

            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerlist"
                }
            });

            return( request );
        }

        this.offerInfo = function(guid) {
            console.log("offerInfo( " + guid + ")");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerinfo",
                    "params":[guid]
                }
            });

            return( request );
        }

        this.getOfferInfoRequest = function(guid) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"offerinfo",
                    "params":[guid]
                }
            };

            return( request );
        }

        //CERTIFICATES
        this.certissuerList = function() {
            console.log("certissuerList()");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certissuerlist"
                },
                params: {}
            });

            return( request );
        }
        
        this.certissuerNew = function(guid, cdata) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certissuernew",
                    "params":[guid, cdata]
                }
            };

            return( request );
        }
        
        this.certissuerScan = function() {
            console.log("certIssuerScan()");
            var start = 0;
            var end = 1000;
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certissuerscan",
                    "params":[start, end]
                }
            });

            return( request );
        }
        
        this.certissuerUpdate = function(guid, title, cdata) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certissuerupdate",
                    "params":[guid, title, cdata]
                }
            };

            return( request );
        }
        
        this.certissuerInfo = function(guid) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certissuerinfo",
                    "params":[guid]
                }
            };

            return( request );
        }
        
        this.certNew = function(guid, address, title, cdata) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certnew",
                    "params":[guid, address, title, cdata]
                }
            };

            return( request );
        }
        
        this.certTransfer = function(guid, address) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"certtransfer",
                    "params":[guid, address]
                }
            };

            return( request );
        }

        // ALIASES
        this.aliasList = function() {
            console.log("aliasList()");
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliaslist"
                }
            });

            return( request );
        }
        
        this.aliasNew = function(guid) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliasnew",
                    "params":[guid]
                }
            };

            return( request );
        }
        
        this.aliasActivate = function(guid, newtxn, value) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliasactivate",
                    "params":[guid, newtxn, value]
                }
            };

            return( request );
        }
        
        // TODO optional to-address
        this.aliasUpdate = function(guid, value) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliasupdate",
                    "params":[guid, value]
                }
            };

            return( request );
        }
        
        this.aliasInfo = function(guid) {
            var request = {
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliasinfo",
                    "params":[guid]
                }
            };

            return( request );
        }
        
        this.aliasScan = function() {
            console.log("aliasScan()");
            var start = 0;
            var end = 1000;
            var request = $http({
                method: "post",
                url: rpcUrl,
                data: {
                    "method":"aliasscan",
                    "params":[start, end]
                }
            });

            return( request );
        }
        
        // ASSETS
        
        this.assetList = "xx";
        
        this.assetPeg = "xx";
        
        this.assetDiv = "xx";
        
        // DATA
        
        this.dataNew = "xx";
        
        this.dataActivate = "xx";
        
        this.dataupdate = "xx";

//        // Return public API.
//        return {
//            getInfo: getInfo,
//            offerNew: offerNew,
//            listTransactions: listTransactions,
//            offerList: offerList,
//            offerInfo: offerInfo,
//            certissuerList: certissuerList,
//            aliasList: aliasList,
//            getRawTransaction: getRawTransaction,
//            decodeRawTransaction: decodeRawTransaction
//        };

    }])

    .factory('Base64', function() {
        /* jshint ignore:start */

        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        return {
            encode: function(input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function(input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        };

        /* jshint ignore:end */
    });
