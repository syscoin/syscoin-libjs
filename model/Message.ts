'use strict';
import * as models from './models';

export interface Message {


    gUID?: string;

    time?: number;

    from?: string;

    to?: string;

    subject?: string;

    message?: string;
}
