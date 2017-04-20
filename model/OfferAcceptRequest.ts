'use strict';
import * as models from './models';

export interface OfferAcceptRequest {
    

    /**
     * An alias of the buyer.
     */
    alias?: string;

    /**
     * guidkey from offer.
     */
    guid?: string;

    /**
     * quantity to buy. Defaults to 1.
     */
    quantity?: number;

    /**
     * payment message to seller, 1KB max.
     */
    message?: string;

    /**
     * If paid in another coin, enter the Transaction ID here. Default is empty.
     */
    exttxid?: string;

    /**
     * If Ext TxId is defined, specify a valid payment option used to make payment. Default is SYS.
     */
    paymentoption?: string;
}
