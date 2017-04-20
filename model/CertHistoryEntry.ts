'use strict';
import * as models from './models';

export interface CertHistoryEntry {
    

    cert?: string;

    certtype?: string;

    private?: boolean;

    data?: string;

    txid?: string;

    address?: string;

    alias?: string;

    expiresIn?: number;

    expiresOn?: number;

    expired?: boolean;
}
