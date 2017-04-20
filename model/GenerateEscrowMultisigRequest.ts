'use strict';
import * as models from './models';

export interface GenerateEscrowMultisigRequest {
    

    buyer?: string;

    offerguid?: string;

    quantity?: number;

    arbiter?: string;

    paymentoption?: string;
}
