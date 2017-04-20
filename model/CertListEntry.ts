'use strict';
import * as models from './models';

export interface CertListEntry {
    

    cert?: string;

    title?: string;

    data?: string;

    private?: boolean;

    expiresIn?: number;

    expiresOn?: number;

    expired?: boolean;

    address?: string;

    alias?: string;
}
