'use strict';
import * as models from './models';

export interface EscrowListEntry {
    

    escrow?: string;

    time?: number;

    seller?: string;

    arbiter?: string;

    buyer?: string;

    offer?: string;

    offertitle?: string;

    offeracceptlink?: string;

    total?: number;

    status?: string;

    expired?: boolean;
}
