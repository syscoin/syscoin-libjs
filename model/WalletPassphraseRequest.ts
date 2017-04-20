'use strict';
import * as models from './models';

export interface WalletPassphraseRequest {
    

    /**
     * The wallet passphrase
     */
    passphrase?: string;

    /**
     * The time to keep the decryption key in seconds.
     */
    timeout?: number;
}
