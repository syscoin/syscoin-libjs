'use strict';
import * as models from './models';

export interface Offer {


    offer?: string;

    cert?: string;

    txid?: string;

    expiresIn?: number;

    expiredBlock?: number;

    expired?: boolean;

    height?: number;

    category?: string;

    title?: string;

    quantity?: string;

    currency?: string;

    sysprice?: number;

    price?: number;

    ismine?: boolean;

    commission?: number;

    offerlink?: boolean;

    offerlinkGuid?: string;

    offerlinkSeller?: string;

    private?: boolean;

    safesearch?: string;

    safetylevel?: number;

    paymentoptions?: number;

    paymentoptionsDisplay?: string;

    aliasPeg?: string;

    description?: string;

    alias?: string;

    address?: string;

    aliasRating?: number;

    aliasRatingCount?: number;

    aliasRatingDisplay?: string;

    geolocation?: string;

    offersSold?: number;

    time?: string;
}
