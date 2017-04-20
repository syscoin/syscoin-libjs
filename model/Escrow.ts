'use strict';
import * as models from './models';

export interface Escrow {
    

    escrow?: string;

    time?: string;

    seller?: string;

    arbiter?: string;

    buyer?: string;

    offer?: string;

    offertitle?: string;

    offeracceptlink?: string;

    systotal?: number;

    sysfee?: number;

    total?: number;

    txid?: string;

    height?: number;

    payMessage?: string;
}
