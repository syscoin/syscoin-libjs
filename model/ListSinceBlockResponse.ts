'use strict';
import * as models from './models';

export interface ListSinceBlockResponse {
    

    transactions?: Array<models.SinceBlockTransactionEntry>;

    /**
     * The hash of the last block
     */
    lastblock?: string;
}
