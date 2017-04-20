'use strict';
import * as models from './models';

export interface AliasUpdateRequest {
    

    /**
     * Alias peg which will be used for conversion operations on all Syscoin services related to this Alias
     */
    aliaspeg?: string;

    /**
     * Alias name
     */
    aliasname?: string;

    /**
     * Alias public profile data, 1023 chars max.
     */
    publicvalue?: string;

    /**
     * Alias private profile data, 1023 chars max. Will be private and readable by owner only.
     */
    privatevalue?: string;

    /**
     * Used to generate your public/private key that controls this alias. Warning: Calling this function over a public network can lead to someone reading your password in plain text.
     */
    password?: string;

    /**
     * set to No if this alias should only show in the search when safe search is not selected. Defaults to Yes (alias shows with or without safe search selected in search lists).
     */
    safesearch?: string;

    /**
     * receiver syscoin alias pub key, if transferring alias.
     */
    toaliasPubkey?: string;

    /**
     * set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes.
     */
    accepttransfers?: string;

    /**
     * Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(1.5^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year.
     */
    expire?: string;

    /**
     * For multisig aliases only. The number of required signatures out of the n aliases for a multisig alias update.
     */
    nrequired?: number;

    /**
     * For multisig aliases only. A json array of aliases which are used to sign on an update to this alias. [ \"alias\"    Existing syscoin alias name ,... ]
     */
    aliases?: Array<string>;
}
