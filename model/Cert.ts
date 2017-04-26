'use strict';
import * as models from './models';

export interface Cert {
    

    cert?: string;

    txid?: string;

    height?: number;

    title?: string;

    data?: string;

    private?: boolean;

    ismine?: boolean;

    address?: string;

    alias?: string;

    expiresIn?: number;

    expiresOn?: number;

    expired?: boolean;

    time?: string;
}
