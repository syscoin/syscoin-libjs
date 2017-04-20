'use strict';
import * as models from './models';

export interface SignMessageRequest {
    

    /**
     * The syscoin address to use for the private key.
     */
    syscoinaddress?: string;

    /**
     * The message to create a signature of.
     */
    message?: string;
}
