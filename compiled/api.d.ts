/// <reference path="../API/Client/api.d.ts" />
declare namespace API.Client {
    interface AddMultisigAddressRequest {
        /**
         * The number of required signatures out of the n keys or addresses.
         */
        "nrequired": number;
        /**
         * A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]
         */
        "keysobject": string;
        /**
         * DEPRECATED. An account to assign the addresses to.
         */
        "account"?: string;
    }
}
declare namespace API.Client {
    interface AddressGrouping {
        /**
         * The syscoin address
         */
        "syscoinaddress"?: string;
        /**
         * The amount in SYS
         */
        "amount"?: number;
        /**
         * (optional) The account (DEPRECATED)
         */
        "account"?: string;
    }
}
declare namespace API.Client {
    interface Alias {
        "name"?: string;
        "value"?: string;
        "privatevalue"?: string;
        "txid"?: string;
        "address"?: string;
        "ismine"?: boolean;
        "lastupdateHeight"?: number;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
    }
}
declare namespace API.Client {
    interface AliasHistoryEntry {
        "name"?: string;
        "aliastype"?: string;
        "value"?: string;
        "privatevalue"?: string;
        "txid"?: string;
        "address"?: string;
        "lastupdateHeight"?: number;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
    }
}
declare namespace API.Client {
    interface AliasListEntry {
        "name": string;
        "value": string;
        "privatevalue": string;
        "expiresIn": number;
        "expiresOn": number;
        "expired": boolean;
        "pending": boolean;
        "txid"?: string;
    }
}
declare namespace API.Client {
    interface AliasNewRequest {
        /**
         * Alias name
         */
        "aliasname": string;
        /**
         * Alias public profile data, 1023 chars max.
         */
        "publicvalue": string;
        /**
         * Alias private profile data, 1023 chars max. Will be private and readable by owner only.
         */
        "privatevalue"?: string;
    }
}
declare namespace API.Client {
    interface AliasUpdateRequest {
        /**
         * alias name.
         */
        "aliasname": string;
        /**
         * alias public profile data, 1023 chars max.
         */
        "publicvalue": string;
        /**
         * alias private profile data, 1023 chars max. Will be private and readable by owner only.
         */
        "privatevalue"?: string;
        /**
         * receiver syscoin alias pub key, if transferring alias.
         */
        "toaliasPubkey"?: string;
    }
}
declare namespace API.Client {
    interface ByteMessageInfo {
        "addr": number;
        "block"?: number;
        "getaddr"?: number;
        "getdata"?: number;
        "getheaders": number;
        "headers": number;
        "inv": number;
        "ping": number;
        "pong": number;
        "sendheaders": number;
        "tx"?: number;
        "verack": number;
        "version": number;
    }
}
declare namespace API.Client {
    interface Cert {
        "cert"?: string;
        "txid"?: string;
        "height"?: number;
        "title"?: string;
        "data"?: string;
        "private"?: boolean;
        "ismine"?: boolean;
        "address"?: string;
        "alias"?: string;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
    }
}
declare namespace API.Client {
    interface CertHistoryEntry {
        "cert"?: string;
        "certtype"?: string;
        "private"?: boolean;
        "data"?: string;
        "txid"?: string;
        "address"?: string;
        "alias"?: string;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
    }
}
declare namespace API.Client {
    interface CertListEntry {
        "cert"?: string;
        "title"?: string;
        "data"?: string;
        "private"?: boolean;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
        "address"?: string;
        "alias"?: string;
    }
}
declare namespace API.Client {
    interface CertNewRequest {
        /**
         * An alias you own.
         */
        "alias": string;
        /**
         * title, 255 bytes max.
         */
        "title": string;
        /**
         * data, 1KB max.
         */
        "data": string;
        /**
         * set to 1 if you only want to make the cert data private, only the owner of the cert can view it. Off by default.
         */
        "private"?: boolean;
    }
}
declare namespace API.Client {
    interface CertTransferRequest {
        "certkey": string;
        "alias": string;
    }
}
declare namespace API.Client {
    interface CertUpdateRequest {
        /**
         * certificate guidkey.
         */
        "guid": string;
        /**
         * certificate title, 255 bytes max.
         */
        "title": string;
        /**
         * certificate data, 1KB max.
         */
        "data": string;
        /**
         * set to 1 if you only want to make the cert data private, only the owner of the cert can view it.
         */
        "private": boolean;
    }
}
declare namespace API.Client {
    interface ErrorResponse {
        "message": string;
    }
}
declare namespace API.Client {
    interface Escrow {
        "escrow"?: string;
        "time"?: string;
        "seller"?: string;
        "arbiter"?: string;
        "buyer"?: string;
        "offer"?: string;
        "offertitle"?: string;
        "offeracceptlink"?: string;
        "systotal"?: number;
        "sysfee"?: number;
        "total"?: number;
        "txid"?: string;
        "height"?: number;
        "payMessage"?: string;
    }
}
declare namespace API.Client {
    interface EscrowClaimRefundRequest {
        "guid": string;
    }
}
declare namespace API.Client {
    interface EscrowClaimReleaseRequest {
        "guid": string;
    }
}
declare namespace API.Client {
    interface EscrowCompleteRequest {
        "guid": string;
    }
}
declare namespace API.Client {
    interface EscrowHistoryEntry {
        "escrow"?: string;
        "escrowtype"?: string;
        "txid"?: string;
        "seller"?: string;
        "arbiter"?: string;
        "buyer"?: string;
        "offer"?: string;
        "offertitle"?: string;
        "offeracceptlink"?: string;
        "total"?: number;
        "expired"?: boolean;
        "height"?: number;
    }
}
declare namespace API.Client {
    interface EscrowListEntry {
        "escrow"?: string;
        "time"?: number;
        "seller"?: string;
        "arbiter"?: string;
        "buyer"?: string;
        "offer"?: string;
        "offertitle"?: string;
        "offeracceptlink"?: string;
        "total"?: number;
        "status"?: string;
        "expired"?: boolean;
    }
}
declare namespace API.Client {
    interface EscrowNewRequest {
        "alias": string;
        "offer": string;
        "quantity": number;
        "message"?: string;
        "arbiter": string;
    }
}
declare namespace API.Client {
    interface GetNewAddressRequest {
        /**
         * DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
         */
        "account"?: string;
    }
}
declare namespace API.Client {
    interface ImportAddressRequest {
        /**
         * The hex-encoded script (or address)
         */
        "script": string;
        /**
         * An optional label
         */
        "label"?: string;
        /**
         * Rescan the wallet for transactions
         */
        "rescan"?: boolean;
        /**
         * Add the P2SH version of the script as well
         */
        "p2sh"?: boolean;
    }
}
declare namespace API.Client {
    interface ImportPrivKeyRequest {
        /**
         * The private key (see dumpprivkey)
         */
        "syscoinprivkey": string;
        /**
         * An optional label
         */
        "label"?: string;
        /**
         * Rescan the wallet for transactions
         */
        "rescan"?: boolean;
    }
}
declare namespace API.Client {
    interface ImportPubKeyRequest {
        /**
         * The hex-encoded public key
         */
        "pubkey": string;
        /**
         * An optional label
         */
        "label"?: string;
        /**
         * Rescan the wallet for transactions
         */
        "rescan"?: boolean;
    }
}
declare namespace API.Client {
    interface ImportWalletRequest {
        /**
         * The wallet file
         */
        "filename": string;
    }
}
declare namespace API.Client {
    interface Info {
        /**
         * the server version
         */
        "version": number;
        /**
         * the protocol version
         */
        "protocolversion": number;
        /**
         * the wallet version
         */
        "walletversion": number;
        /**
         * the total syscoin balance of the wallet
         */
        "balance": number;
        /**
         * the current number of blocks processed in the server
         */
        "blocks": number;
        /**
         * the time offset
         */
        "timeoffset": number;
        /**
         * the number of connections
         */
        "connections": number;
        /**
         * the proxy used by the server
         */
        "proxy": string;
        /**
         * the current difficulty
         */
        "difficulty": number;
        /**
         * if the server is using testnet or not
         */
        "testnet": boolean;
        /**
         * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
         */
        "keypoololdest": number;
        /**
         * how many new keys are pre-generated
         */
        "keypoolsize": number;
        /**
         * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
         */
        "unlockedUntil": number;
        /**
         * the transaction fee set in SYS/kB
         */
        "paytxfee": number;
        /**
         * minimum relay fee for non-free transactions in SYS/kB
         */
        "relayfee": number;
        /**
         * any error messages
         */
        "errors": string;
    }
}
declare namespace API.Client {
    interface ListSinceBlockResponse {
        "transactions"?: Array<SinceBlockTransactionEntry>;
        /**
         * The hash of the last block
         */
        "lastblock"?: string;
    }
}
declare namespace API.Client {
    interface Message {
        "gUID"?: string;
        "time"?: number;
        "from"?: string;
        "to"?: string;
        "subject"?: string;
        "message"?: string;
        "txid"?: string;
        "height"?: number;
    }
}
declare namespace API.Client {
    interface MessageHistoryEntry {
        "gUID"?: string;
        "messagetype"?: string;
        "time"?: number;
        "from"?: string;
        "to"?: string;
        "subject"?: string;
        "message"?: string;
    }
}
declare namespace API.Client {
    interface MessageListEntry {
        "gUID"?: string;
        "time"?: number;
        "from"?: string;
        "to"?: string;
        "subject"?: string;
        "message"?: string;
    }
}
declare namespace API.Client {
    interface MessageNewRequest {
        /**
         * Subject of message.
         */
        "subject": string;
        /**
         * Message to send to alias.
         */
        "message": string;
        /**
         * Alias to send message from.
         */
        "fromalias": string;
        /**
         * Alias to send message to.
         */
        "toalias": string;
    }
}
declare namespace API.Client {
    interface MiningInfo {
        /**
         * The current block
         */
        "blocks": number;
        /**
         * The last block size
         */
        "currentblocksize": number;
        /**
         * The last block transaction
         */
        "currentblocktx": number;
        /**
         * The current difficulty
         */
        "difficulty": number;
        /**
         * Current errors
         */
        "errors": string;
        /**
         * The processor limit for generation. -1 if no generation.
         */
        "genproclimit": number;
        /**
         * Current network hashrate in kbs
         */
        "networkhashps"?: number;
        /**
         * The size of the mem pool
         */
        "pooledtx": number;
        /**
         * If using testnet or not
         */
        "testnet": boolean;
        /**
         * current network name as defined in BIP70 (main, test, regtest)
         */
        "chain": string;
        /**
         * If the generation is on or off (see getgenerate or setgenerate calls)
         */
        "generate": boolean;
    }
}
declare namespace API.Client {
    interface MoveRequest {
        /**
         * The name of the account to move funds from. May be the default account using \"\".
         */
        "fromaccount": string;
        /**
         * The name of the account to move funds to. May be the default account using \"\".
         */
        "toaccount": string;
        /**
         * Quantity of SYS to move between accounts.
         */
        "amount": number;
        /**
         * Only use funds with at least this many confirmations.
         */
        "minconf"?: string;
        /**
         * An optional comment, stored in the wallet only.
         */
        "comment"?: string;
    }
}
declare namespace API.Client {
    interface Offer {
        "offer"?: string;
        "cert"?: string;
        "txid"?: string;
        "expiresIn"?: number;
        "expiredBlock"?: number;
        "expired"?: boolean;
        "height"?: number;
        "address"?: string;
        "category"?: string;
        "title"?: string;
        "quantity"?: string;
        "currency"?: string;
        "sysprice"?: number;
        "price"?: number;
        "ismine"?: boolean;
        "commission"?: number;
        "offerlink"?: boolean;
        "offerlinkGuid"?: string;
        "exclusiveResell"?: boolean;
        "private"?: boolean;
        "btconly"?: boolean;
        "aliasPeg"?: string;
        "description"?: string;
        "alias&quot;"?: string;
        "accepts"?: Array<OfferAccept>;
    }
}
declare namespace API.Client {
    interface OfferAccept {
        "offer"?: string;
        "title"?: string;
        "id"?: string;
        "btctxid"?: string;
        "alias"?: string;
        "buyer"?: string;
        "height"?: number;
        "quantity"?: number;
        "currency"?: string;
        "linkofferaccept"?: string;
        "offerDiscountPercentage"?: number;
        "escrowlink"?: string;
        "systotal"?: number;
        "price"?: number;
        "total"?: number;
        "ismine"?: boolean;
        "status"?: string;
        "payMessage"?: string;
    }
}
declare namespace API.Client {
    interface OfferAcceptRequest {
        /**
         * An alias of the buyer.
         */
        "alias": string;
        /**
         * guidkey from offer.
         */
        "guid": string;
        /**
         * quantity to buy. Defaults to 1.
         */
        "quantity": number;
        /**
         * payment message to seller, 1KB max.
         */
        "message"?: string;
        /**
         * If you have paid in Bitcoin and the offer is in Bitcoin, enter the transaction ID here. Default is empty.
         */
        "btcTxId"?: string;
        /**
         * transaction id of the linking offer accept. For internal use only, leave blank
         */
        "linkedacceptguidtxhash"?: string;
        /**
         * If this offer accept is done by an escrow release. For internal use only, leave blank
         */
        "escrowTxHash"?: string;
    }
}
declare namespace API.Client {
    interface OfferAddWhitelistRequest {
        /**
         * offer guid that you are adding to
         */
        "offerguid": string;
        /**
         * alias guid representing an alias that you want to add to the affiliate list
         */
        "aliasguid": string;
        /**
         * percentage of discount given to reseller for this offer. Negative discount adds on top of offer price, acts as an extra commission. -99 to 99.
         */
        "discountPercentage": number;
    }
}
declare namespace API.Client {
    interface OfferClearWhitelistRequest {
        "offerguid": string;
    }
}
declare namespace API.Client {
    interface OfferHistoryEntry {
        "offer"?: string;
        "offertype"?: string;
        "cert"?: string;
        "title"?: string;
        "category"?: string;
        "description"?: string;
        "price"?: number;
        "currency"?: string;
        "commission"?: number;
        "quantity"?: number;
        "txid"?: string;
        "alias"?: string;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
        "height"?: boolean;
    }
}
declare namespace API.Client {
    interface OfferLinkRequest {
        /**
         * An alias you own.
         */
        "alias": string;
        /**
         * offer guid that you are linking to
         */
        "guid": string;
        /**
         * percentage of profit desired over original offer price, > 0, ie 5 for 5%
         */
        "comission": string;
        /**
         * description, 1 KB max. Defaults to original description. Leave as '' to use default.
         */
        "description"?: string;
    }
}
declare namespace API.Client {
    interface OfferListEntry {
        "offer"?: string;
        "cert"?: string;
        "title"?: string;
        "category"?: string;
        "description"?: string;
        "price"?: number;
        "currency"?: string;
        "commission"?: number;
        "quantity"?: number;
        "address"?: string;
        "exclusiveResell"?: boolean;
        "btconly"?: boolean;
        "aliasPeg"?: string;
        "private"?: boolean;
        "alias"?: string;
        "expiresIn"?: number;
        "expiresOn"?: number;
        "expired"?: boolean;
        "pending"?: boolean;
    }
}
declare namespace API.Client {
    interface OfferNewRequest {
        /**
         * Alias peg you wish to use, leave blank to use SYS_RATES.
         */
        "aliaspeg": string;
        /**
         * An alias you own.
         */
        "alias": string;
        /**
         * category, 255 chars max.
         */
        "category": string;
        /**
         * title, 255 chars max.
         */
        "title": string;
        /**
         * quantity, > 0 or -1 for infinite
         */
        "quantity": number;
        /**
         * price in <currency>, > 0
         */
        "price": number;
        /**
         * description, 1 KB max.
         */
        "description": string;
        /**
         * The currency code that you want your offer to be in ie USD.
         */
        "currency": string;
        /**
         * Set this to the guid of a certificate you wish to sell
         */
        "certguid"?: string;
        /**
         * set to 1 if you only want those who control the affiliate's who are able to resell this offer via offerlink. Defaults to 1.
         */
        "excelusiveResell"?: boolean;
        /**
         * set to 1 if you only want accept Bitcoins for payment and your currency is set to BTC, note you cannot resell or sell a cert in this mode. Defaults to 0.
         */
        "acceptBTCOnly"?: boolean;
    }
}
declare namespace API.Client {
    interface OfferRemoveWhitelistRequest {
        "offerguid": string;
        "aliasguid": string;
    }
}
declare namespace API.Client {
    interface OfferUpdateRequest {
        /**
         * Alias peg you wish to use, leave blank to use SYS_RATES.
         */
        "aliaspeg": string;
        /**
         * An alias you own.
         */
        "alias": string;
        /**
         * Guid of offer to update
         */
        "guid": string;
        /**
         * category, 255 chars max.
         */
        "category": string;
        /**
         * title, 255 chars max.
         */
        "title": string;
        /**
         * quantity, > 0 or -1 for infinite
         */
        "quantity": number;
        /**
         * price in <currency>, > 0
         */
        "price": number;
        /**
         * description, 1 KB max.
         */
        "description": string;
        /**
         * Can this offer be seen in public search
         */
        "private": boolean;
        /**
         * Set this to the guid of a certificate you wish to sell
         */
        "certguid"?: string;
        /**
         * set to 1 if you only want those who control the affiliate's who are able to resell this offer via offerlink. Defaults to 1.
         */
        "excelusiveResell"?: boolean;
    }
}
declare namespace API.Client {
    interface OfferWhitelistEntry {
        "alias"?: string;
        "expiresin"?: number;
        "offerDiscountPercentage"?: number;
    }
}
declare namespace API.Client {
    interface PeerInfo {
        /**
         * Peer index
         */
        "id": number;
        /**
         * The ip address and port of the peer
         */
        "addr": string;
        /**
         * local address
         */
        "addrlocal": string;
        /**
         * The services offered
         */
        "services": string;
        /**
         * Whether peer has asked us to relay transactions to it
         */
        "relaytxes": boolean;
        /**
         * The time in seconds since epoch (Jan 1 1970 GMT) of the last send
         */
        "lastsend": number;
        /**
         * The time in seconds since epoch (Jan 1 1970 GMT) of the last receive
         */
        "lastrecv": number;
        /**
         * The total bytes sent
         */
        "bytessent": number;
        /**
         * The total bytes received
         */
        "bytesrecv": number;
        /**
         * The connection time in seconds since epoch (Jan 1 1970 GMT)
         */
        "conntime": number;
        /**
         * The time offset in seconds
         */
        "timeoffset": number;
        /**
         * ping time
         */
        "pingtime": number;
        /**
         * minimum observed ping time
         */
        "minping": number;
        /**
         * The peer version, such as 7001
         */
        "version": number;
        /**
         * The string version
         */
        "subver": string;
        /**
         * Inbound (true) or Outbound (false)
         */
        "inbound": boolean;
        /**
         * The starting height (block) of the peer
         */
        "startingheight": number;
        /**
         * The ban score
         */
        "banscore": number;
        /**
         * The last header we have in common with this peer
         */
        "syncedHeaders": number;
        /**
         * The last block we have in common with this peer
         */
        "syncedBlocks": number;
        /**
         * The heights of blocks we're currently asking from this peer
         */
        "inflight": Array<number>;
        /**
         * If this peer is whitelisted
         */
        "whitelisted": boolean;
        "bytessentPerMsg": ByteMessageInfo;
        "bytesrecvPerMsg": ByteMessageInfo;
    }
}
declare namespace API.Client {
    interface PeerInfoResponse extends Array<PeerInfo> {
    }
}
declare namespace API.Client {
    interface SendFromRequest {
        /**
         * The name of the account to send funds from. May be the default account using \"\".
         */
        "fromaccount": string;
        /**
         * The syscoin address to send funds to.
         */
        "tosyscoinaddress": string;
        /**
         * he amount in SYS (transaction fee is added on top).
         */
        "amount": number;
        /**
         * Only use funds with at least this many confirmations.
         */
        "minconf"?: number;
        /**
         * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
         */
        "comment"?: string;
        /**
         * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
         */
        "commentto"?: string;
    }
}
declare namespace API.Client {
    interface SendManyRequest {
        /**
         * DEPRECATED. The account to send the funds from. Should be \"\" for the default account
         */
        "fromaccount": string;
        /**
         * A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}
         */
        "amounts": string;
        /**
         * Only use the balance confirmed at least this many times.
         */
        "minconf"?: number;
        /**
         * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
         */
        "comment"?: string;
        /**
         * A json array with addresses. The fee will be equally deducted from the amount of each selected address. Those recipients will receive less syscoins than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee. [ \"address\" Subtract fee from this address,... ]
         */
        "subtractfeefromamount"?: string;
    }
}
declare namespace API.Client {
    interface SendToAddressRequest {
        /**
         * The syscoin address to send to.
         */
        "syscoinaddress": string;
        /**
         * The amount in SYS to send. eg 0.1
         */
        "amount": number;
        /**
         * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
         */
        "comment"?: string;
        /**
         * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
         */
        "commentto"?: string;
        /**
         * The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field.
         */
        "subtractfeefromamount"?: string;
    }
}
declare namespace API.Client {
    interface SignMessageRequest {
        /**
         * The syscoin address to use for the private key.
         */
        "syscoinaddress": string;
        /**
         * The message to create a signature of.
         */
        "message": number;
    }
}
declare namespace API.Client {
    interface SinceBlockTransactionEntry {
        /**
         * DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account.
         */
        "account"?: string;
        /**
         * The syscoin address of the transaction. Not present for move transactions (category = move).
         */
        "address"?: string;
        /**
         * The transaction category. 'send' has negative amounts, 'receive' has positive amounts.
         */
        "category"?: string;
        /**
         * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
         */
        "amount"?: number;
        /**
         * the vout value
         */
        "vout"?: number;
        /**
         * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
         */
        "fee"?: number;
        /**
         * The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "confirmations"?: number;
        /**
         * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockhash"?: string;
        /**
         * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockindex"?: number;
        /**
         * The block time in seconds since epoch (1 Jan 1970 GMT).
         */
        "blocktime"?: number;
        /**
         * The transaction id. Available for 'send' and 'receive' category of transactions.
         */
        "txid"?: string;
        /**
         * The transaction time in seconds since epoch (Jan 1 1970 GMT).
         */
        "time"?: number;
        /**
         * The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
         */
        "timereceived"?: number;
        /**
         * If a comment is associated with the transaction.
         */
        "comment"?: string;
        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;
        /**
         * If a comment to is associated with the transaction.
         */
        "to"?: string;
    }
}
declare namespace API.Client {
    interface Transaction {
        /**
         * The transaction amount in SYS
         */
        "amount"?: string;
        /**
         * The number of confirmations
         */
        "confirmations"?: number;
        /**
         * The block hash
         */
        "blockhash"?: string;
        /**
         * The block index
         */
        "blockindex"?: number;
        /**
         * The time in seconds since epoch (1 Jan 1970 GMT)
         */
        "blocktime"?: number;
        /**
         * The transaction id.
         */
        "txid"?: string;
        /**
         * The transaction time in seconds since epoch (1 Jan 1970 GMT)
         */
        "time"?: number;
        /**
         * The time received in seconds since epoch (1 Jan 1970 GMT)
         */
        "timereceived"?: number;
        "details"?: Array<TransactionDetailEntry>;
        /**
         * Raw data for transaction
         */
        "hex"?: string;
    }
}
declare namespace API.Client {
    interface TransactionDetailEntry {
        /**
         * DEPRECATED. The account name involved in the transaction, can be \"\" for the default account.
         */
        "account"?: string;
        /**
         * The syscoin address involved in the transaction
         */
        "address"?: string;
        /**
         * The category, either 'send' or 'receive'
         */
        "category"?: string;
        /**
         * The amount in SYS
         */
        "amount"?: number;
        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;
        /**
         * the vout value
         */
        "vout"?: number;
    }
}
declare namespace API.Client {
    interface TransactionListEntry {
        /**
         * DEPRECATED. The account name associated with the transaction. It will be \"\" for the default account.
         */
        "account"?: string;
        /**
         * The syscoin address of the transaction. Not present for move transactions (category = move).
         */
        "address"?: string;
        /**
         * The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details
         */
        "category"?: string;
        /**
         * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
         */
        "amount"?: number;
        /**
         * the vout value
         */
        "vout"?: number;
        /**
         * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
         */
        "fee"?: number;
        /**
         * The number of confirmations for the transaction. Available for 'send' and'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain
         */
        "confirmations"?: number;
        /**
         * Whether we consider the outputs of this unconfirmed transaction safe to spend.
         */
        "trusted"?: boolean;
        /**
         * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockhash"?: string;
        /**
         * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
         */
        "blockindex"?: string;
        /**
         * The block time in seconds since epoch (1 Jan 1970 GMT).
         */
        "blocktime"?: number;
        /**
         * The transaction id. Available for 'send' and 'receive' category of transactions.
         */
        "txid"?: string;
        /**
         * The transaction time in seconds since epoch (midnight Jan 1 1970 GMT).
         */
        "time"?: number;
        /**
         * The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
         */
        "timereceived"?: number;
        /**
         * If a comment is associated with the transaction.
         */
        "comment"?: string;
        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;
        /**
         * For the 'move' category of transactions, the account the funds came from (for receiving funds, positive amounts), or went to (for sending funds, negative amounts).
         */
        "otheraccount"?: string;
    }
}
declare namespace API.Client {
    interface ValidateAddressResponse {
        /**
         * If the address is valid or not. If not, this is the only property returned.
         */
        "isvalid"?: boolean;
        /**
         * The syscoin address validated
         */
        "address"?: string;
        /**
         * If the address is yours or not
         */
        "ismine"?: boolean;
        /**
         * If the address is watchonly
         */
        "iswatchonly"?: boolean;
        /**
         * If the key is a script
         */
        "isscript"?: boolean;
        /**
         * The hex value of the raw public key
         */
        "pubkey"?: string;
        /**
         * If the address is compressed
         */
        "iscompressed"?: boolean;
        /**
         * DEPRECATED. The account associated with the address, \"\" is the default account
         */
        "account"?: string;
    }
}
declare namespace API.Client {
    interface WalletInfo {
        /**
         * the wallet version
         */
        "walletversion"?: number;
        /**
         * the total confirmed balance of the wallet in SYS
         */
        "balance"?: number;
        /**
         * the total unconfirmed balance of the wallet in SYS
         */
        "unconfirmedBalance"?: number;
        /**
         * the total immature balance of the wallet in SYS
         */
        "immatureBalance"?: number;
        /**
         * the total number of transactions in the wallet
         */
        "txcount"?: number;
        /**
         * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
         */
        "keypoololdest"?: number;
        /**
         * how many new keys are pre-generated
         */
        "keypoolsize"?: number;
        /**
         * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
         */
        "unlockedUntil"?: number;
        /**
         * the transaction fee configuration, set in SYS/kB
         */
        "paytxfee"?: number;
    }
}
declare namespace API.Client {
    interface WalletPassphraseChangeRequest {
        /**
         * The current passphrase
         */
        "oldpassphrase": string;
        /**
         * The new passphrase
         */
        "newpassphrase": string;
    }
}
declare namespace API.Client {
    interface WalletPassphraseRequest {
        /**
         * The wallet passphrase
         */
        "passphrase": string;
        /**
         * The time to keep the decryption key in seconds.
         */
        "timeout": number;
    }
}
declare namespace API.Client {
    class AliasesApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * list affiliations with merchant offers.
         */
        aliasaffiliates(extraHttpRequestParams?: any): ng.IHttpPromise<Array<any>>;
        /**
         *
         * Filter aliases
         * @param regexp apply [regexp] on aliases, empty means all aliases
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        aliasfilter(regexp: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<AliasListEntry>>;
        /**
         *
         * List all stored values of an alias.
         * @param aliasname
         */
        aliashistory(aliasname: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<AliasHistoryEntry>>;
        /**
         *
         * Show values of an alias.
         * @param aliasname
         */
        aliasinfo(aliasname: string, extraHttpRequestParams?: any): ng.IHttpPromise<Alias>;
        /**
         *
         * List my own aliases.
         * @param aliasname Alias name to use as filter.
         */
        aliaslist(aliasname?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<AliasListEntry>>;
        /**
         *
         * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        aliasnew(request: AliasNewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Scan all aliases, starting at start-name and returning a maximum number of entries (default 500)
         * @param startName
         * @param maxReturned
         */
        aliasscan(startName?: string, maxReturned?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        aliasupdate(request: AliasUpdateRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
    }
}
declare namespace API.Client {
    class CertificatesApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * scan and filter certs
         * @param regexp apply [regexp] on certes, empty means all certes
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        certfilter(regexp?: string, maxage?: string, from?: string, nb?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<CertListEntry>>;
        /**
         *
         * List all stored values of an cert.
         * @param certname
         */
        certhistory(certname: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<CertHistoryEntry>>;
        /**
         *
         * Show stored values of a single certificate.
         * @param certname
         */
        certinfo(certname: string, extraHttpRequestParams?: any): ng.IHttpPromise<Cert>;
        /**
         *
         * Show stored values of a single certificate.
         */
        certlist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<CertListEntry>>;
        /**
         *
         * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certnew(request: CertNewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * scan all certs, starting at start-cert and returning a maximum number of entries (default 500)
         * @param startCert
         * @param maxReturned
         */
        certscan(startCert?: string, maxReturned?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certtransfer(request: CertTransferRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certupdate(request: CertUpdateRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
    }
}
declare namespace API.Client {
    class EscrowApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * Claim escrow funds released from seller or arbiter using escrowrefund. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        escrowclaimrefund(request: EscrowClaimRefundRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Claim escrow funds released from buyer or arbiter using escrowrelease. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        escrowclaimrelease(request: EscrowClaimReleaseRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Accepts an offer that&#39;s in escrow, to complete the escrow process. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        escrowcomplete(request: EscrowCompleteRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * scan and filter escrows
         * @param search Find arbiter or seller via alias name or an escrow GUID, empty means all escrows
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        escrowfilter(search: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<EscrowListEntry>>;
        /**
         *
         * List all stored values of an escrow.
         * @param escrow
         */
        escrowhistory(escrow: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<EscrowHistoryEntry>>;
        /**
         *
         * Show stored values of a single escrow
         * @param escrow
         */
        escrowinfo(escrow: string, extraHttpRequestParams?: any): ng.IHttpPromise<Escrow>;
        /**
         *
         * list my own escrows
         */
        escrowlist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<EscrowListEntry>>;
        /**
         *
         * Create new arbitrated Syscoin escrow.
         * @param request
         */
        escrownew(request: EscrowNewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * scan all escrows, starting at start-escrow and returning a maximum number of entries (default 500)
         * @param startEscrow
         * @param maxReturned
         */
        escrowscan(startEscrow?: string, maxReturned?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
    }
}
declare namespace API.Client {
    class GeneralApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If &#39;account&#39; is specified (DEPRECATED), assign address to that account.
         * @param request
         */
        addmultisigaddress(request: AddMultisigAddressRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Reveals the private key corresponding to &#39;syscoinaddress&#39;. Then the importprivkey can be used with this output.
         * @param address The syscoin address for the private key
         */
        dumpprivkey(address: string, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Dumps all wallet keys in a human-readable format.
         * @param filename The filename
         */
        dumpwallet(filename: string, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * DEPRECATED. Returns the account associated with the given address.
         * @param syscoinaddress The syscoin address for account lookup.
         */
        getaccount(syscoinaddress: string, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
         * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
         */
        getaccountaddress(account: string, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * DEPRECATED. Returns the list of addresses for the given account.
         * @param account
         */
        getaddressesbyaccount(account: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * If account is not specified, returns the server&#39;s total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \&quot;\&quot; is not the same as leaving the parameter out. The server total may be different to the balance in the default \&quot;\&quot; account.
         * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
         */
        getbalance(account?: string, minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<number>;
        /**
         *
         * Returns an object containing various state info.
         */
        getinfo(extraHttpRequestParams?: any): ng.IHttpPromise<Info>;
        /**
         *
         * Returns a json object containing mining-related information.
         */
        getmininginfo(extraHttpRequestParams?: any): ng.IHttpPromise<MiningInfo>;
        /**
         *
         * Returns a new Syscoin address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
         * @param request
         */
        getnewaddress(request?: GetNewAddressRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Returns data about each connected network node as a json array of objects.
         */
        getpeerinfo(extraHttpRequestParams?: any): ng.IHttpPromise<PeerInfoResponse>;
        /**
         *
         * DEPRECATED. Returns the total amount received by addresses with &lt;account&gt; in transactions with at least [minconf] confirmations.
         * @param account The selected account, may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         */
        getreceivedbyaccount(account: string, minconf?: number, extraHttpRequestParams?: any): ng.IHttpPromise<number>;
        /**
         *
         * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
         * @param syscoinaddress The syscoin address for transactions.
         * @param minconf Only include transactions confirmed at least this many times.
         */
        getreceivedbyaddress(syscoinaddress: string, minconf?: number, extraHttpRequestParams?: any): ng.IHttpPromise<number>;
        /**
         *
         * Get detailed information about in-wallet transaction &lt;txid&gt;
         * @param txid The transaction id
         * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
         */
        gettransaction(txid: string, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<Transaction>;
        /**
         *
         * Returns the server&#39;s total unconfirmed balance
         */
        getunconfirmedbalance(extraHttpRequestParams?: any): ng.IHttpPromise<number>;
        /**
         *
         * Returns a new Syscoin (starts with 1) address for receiving payments. If &#39;account&#39; is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to &#39;account&#39;.
         * @param account DEPRECATED. The account name for the address to be linked to. If not provided, the default account \&quot;\&quot; is used. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
         */
        getv2address(account?: string, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Returns an object containing various wallet state info.
         */
        getwalletinfo(extraHttpRequestParams?: any): ng.IHttpPromise<WalletInfo>;
        /**
         *
         * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request
         */
        importaddress(request: ImportAddressRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Adds a private key (as returned by dumpprivkey) to your wallet.
         * @param request
         */
        importprivkey(request: ImportPrivKeyRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request
         */
        importpubkey(request: ImportPubKeyRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Imports keys from a wallet dump file (see dumpwallet).
         * @param request
         */
        importwallet(request: ImportWalletRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * DEPRECATED. Returns Object that has account names as keys, account balances as values.
         * @param minconf Only include transactions with at least this many confirmations
         * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
         */
        listaccounts(minconf?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<any>;
        /**
         *
         * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
         */
        listaddressgroupings(extraHttpRequestParams?: any): ng.IHttpPromise<Array<Array<AddressGrouping>>>;
        /**
         *
         * DEPRECATED. List balances by account.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaccount(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<Array<Account>>;
        /**
         *
         * List balances by receiving address.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaddress(minconf?: number, includeempty?: boolean, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<Array<Account>>;
        /**
         *
         * Get all transactions in blocks since block [blockhash], or all transactions if omitted
         * @param blockhash The block hash to list transactions since
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         * @param targetConfirmations
         */
        listsinceblock(blockhash?: string, includeWatchonly?: boolean, targetConfirmations?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<ListSinceBlockResponse>>;
        /**
         *
         * Returns up to &#39;count&#39; most recent transactions skipping the first &#39;from&#39; transactions for account &#39;account&#39;.
         * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
         * @param count The number of transactions to return
         * @param from The number of transactions to skip
         * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
         */
        listtransactions(account?: string, count?: number, from?: number, includeWatchonly?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<Array<TransactionListEntry>>;
        /**
         *
         * DEPRECATED. Move a specified amount from one account in your wallet to another.
         * @param request
         */
        move(request: MoveRequest, extraHttpRequestParams?: any): ng.IHttpPromise<boolean>;
        /**
         *
         * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendfrom(request: SendFromRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendmany(request: SendManyRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendtoaddress(request: SendToAddressRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        signmessage(request: SignMessageRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Return information about the given syscoin address.
         * @param syscoinaddress
         */
        validateaddress(syscoinaddress: string, extraHttpRequestParams?: any): ng.IHttpPromise<ValidateAddressResponse>;
        /**
         *
         * Verify a signed message
         * @param syscoinaddress The syscoin address to use for the signature.
         * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
         * @param message The message that was signed.
         */
        verifymessage(syscoinaddress: string, signature: string, message: string, extraHttpRequestParams?: any): ng.IHttpPromise<boolean>;
        /**
         *
         * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
         */
        walletlock(extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Stores the wallet decryption key in memory for &#39;timeout&#39; seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
         * @param request
         */
        walletpassphrase(request: WalletPassphraseRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
        /**
         *
         * Changes the wallet passphrase from &#39;oldpassphrase&#39; to &#39;newpassphrase&#39;.
         * @param request
         */
        walletpassphrasechange(request: WalletPassphraseChangeRequest, extraHttpRequestParams?: any): ng.IHttpPromise<string>;
    }
}
declare namespace API.Client {
    class MessagingApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * List all stored values of a message.
         * @param message
         */
        messagehistory(message: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<MessageHistoryEntry>>;
        /**
         *
         * Show stored values of a single message.
         * @param guid
         */
        messageinfo(guid: string, extraHttpRequestParams?: any): ng.IHttpPromise<Message>;
        /**
         *
         * List my own messages
         */
        messagelist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<MessageListEntry>>;
        /**
         *
         * Create a new Syscoin encrypted message.
         * @param request
         */
        messagenew(request: MessageNewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * list my sent messages
         */
        messagesentlist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<MessageListEntry>>;
    }
}
declare namespace API.Client {
    class OffersApi {
        protected $http: ng.IHttpService;
        protected $httpParamSerializer: (d: any) => any;
        protected basePath: string;
        defaultHeaders: any;
        static $inject: string[];
        constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
        private extendObj<T1, T2>(objA, objB);
        /**
         *
         * Accept&amp;Pay for a confirmed offer.
         * @param request
         */
        offeraccept(request: OfferAcceptRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * list my offer accepts
         */
        offeracceptlist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<OfferAccept>>;
        /**
         *
         * Add to the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offeraddwhitelist(request: OfferAddWhitelistRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Clear the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerclearwhitelist(request: OfferClearWhitelistRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * scan and filter offeres
         * @param regexp apply [regexp] on offeres, empty means all offeres
         * @param maxage look in last [maxage] blocks
         * @param from show results from number [from]
         * @param nb show [nb] results, 0 means all
         */
        offerfilter(regexp: string, maxage?: number, from?: number, nb?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<OfferListEntry>>;
        /**
         *
         * List all stored values of an offer.
         * @param offer
         */
        offerhistory(offer: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<OfferHistoryEntry>>;
        /**
         *
         * Show values of an offer.
         * @param guid
         */
        offerinfo(guid: string, extraHttpRequestParams?: any): ng.IHttpPromise<Offer>;
        /**
         *
         * Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerlink(request: OfferLinkRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * list my own offers
         */
        offerlist(extraHttpRequestParams?: any): ng.IHttpPromise<Array<OfferListEntry>>;
        /**
         *
         * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offernew(request: OfferNewRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Remove from the affiliate list of your offer(controls who can resell). Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerremovewhitelist(request: OfferRemoveWhitelistRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * scan all offers, starting at start-offer and returning a maximum number of entries (default 500)
         * @param startOffer
         * @param maxReturned
         */
        offerscan(startOffer?: string, maxReturned?: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerupdate(request: OfferUpdateRequest, extraHttpRequestParams?: any): ng.IHttpPromise<Array<string>>;
        /**
         *
         * List all affiliates for this offer.
         * @param offerguid
         */
        offerwhitelist(offerguid: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<OfferWhitelistEntry>>;
    }
}
declare namespace API.Client {
    interface Account {
        /**
         * Only returned if imported addresses were involved in transaction
         */
        "involvesWatchonly"?: boolean;
        /**
         * The account name of the receiving account
         */
        "account"?: string;
        /**
         * The total amount received by addresses with this account
         */
        "amount"?: number;
        /**
         * The number of confirmations of the most recent transaction included
         */
        "confirmations"?: number;
        /**
         * A comment for the address/transaction, if any
         */
        "label"?: string;
    }
}
