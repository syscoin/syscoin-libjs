'use strict';
import * as models from './models';

export interface AddressGrouping {
    

    /**
     * The syscoin address
     */
    syscoinaddress?: string;

    /**
     * The amount in SYS
     */
    amount?: number;

    /**
     * (optional) The account (DEPRECATED)
     */
    account?: string;
}
