'use strict';
import * as models from './models';

export interface MultiSignatureInfo {
    

    reqsigs?: number;

    reqsigners?: string;

    redeemscript?: string;
}
