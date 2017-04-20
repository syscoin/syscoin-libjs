'use strict';
import * as models from './models';

export interface Alias {
    

    name?: string;

    value?: string;

    privatevalue?: string;

    password?: string;

    txid?: string;

    address?: string;

    aliasPeg?: string;

    balance?: number;

    ismine?: boolean;

    safesearch?: string;

    acceptcerttransfers?: string;

    safetylevel?: number;

    buyerRating?: number;

    buyerRatingcount?: number;

    buyerRatingDisplay?: string;

    sellerRating?: number;

    sellerRatingcount?: number;

    sellerRatingDisplay?: string;

    arbiterRating?: number;

    arbiterRatingcount?: number;

    arbiterRatingDisplay?: string;

    lastupdateHeight?: number;

    expiresIn?: number;

    expiresOn?: number;

    expired?: boolean;

    pending?: boolean;

    multisiginfo?: models.MultiSignatureInfo;
}
