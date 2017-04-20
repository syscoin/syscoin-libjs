'use strict';
import * as models from './models';

export interface LoginResponse {
    

    success?: boolean;

    message?: string;

    token?: string;
}
