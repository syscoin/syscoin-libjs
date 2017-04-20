'use strict';
import * as models from './models';

export interface CertTransferRequest {
    

    /**
     * Certificate guidkey.
     */
    certkey?: string;

    /**
     * Alias to transfer this certificate to.
     */
    alias?: string;

    /**
     * Transfer the certificate as view-only. Recipient cannot edit, transfer or sell this certificate in the future.
     */
    viewonly?: boolean;
}
