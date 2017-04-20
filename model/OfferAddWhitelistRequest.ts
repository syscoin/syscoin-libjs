'use strict';
import * as models from './models';

export interface OfferAddWhitelistRequest {
    

    /**
     * offer guid that you are adding to
     */
    offerguid?: string;

    /**
     * alias guid representing an alias that you want to add to the affiliate list
     */
    aliasguid?: string;

    /**
     * Percentage of discount given to affiliate for this offer. 0 to 99.
     */
    discountPercentage?: number;
}
