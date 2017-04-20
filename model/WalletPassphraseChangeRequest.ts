'use strict';
import * as models from './models';

export interface WalletPassphraseChangeRequest {
    

    /**
     * The current passphrase
     */
    oldpassphrase?: string;

    /**
     * The new passphrase
     */
    newpassphrase?: string;
}
