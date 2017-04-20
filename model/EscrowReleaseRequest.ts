'use strict';
import * as models from './models';

export interface EscrowReleaseRequest {
    

    escrowguid?: string;

    userrole?: string;

    rawtx?: string;
}
