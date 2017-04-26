'use strict';
import * as models from './models';

export interface EscrowHistoryEntry {
    

    escrow?: string;

    escrowtype?: string;

    txid?: string;

    seller?: string;

    arbiter?: string;

    buyer?: string;

    offer?: string;

    offertitle?: string;

    offeracceptlink?: string;

    total?: number;

    expired?: boolean;

    height?: number;

    time?: string;
}
