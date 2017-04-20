'use strict';
import * as models from './models';

export interface AliasPayRequest {
    

    /**
     * Alias you own to pay from
     */
    alias?: string;

    /**
     * A json object with aliases and amounts { \"address\":amount   (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value ,... }
     */
    amounts?: string;

    /**
     * Only use the balance confirmed at least this many times.
     */
    minconf?: number;

    /**
     * A comment
     */
    comment?: string;
}
