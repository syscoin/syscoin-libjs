'use strict';
import * as models from './models';

export interface ImportPrivKeyRequest {
    

    /**
     * The private key (see dumpprivkey)
     */
    syscoinprivkey?: string;

    /**
     * An optional label
     */
    label?: string;

    /**
     * Rescan the wallet for transactions
     */
    rescan?: boolean;
}
