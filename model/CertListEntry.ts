/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface CertListEntry {
    cert?: string;

    title?: string;

    data?: string;

    private?: boolean;

    expires_in?: number;

    expires_on?: number;

    expired?: boolean;

    address?: string;

    alias?: string;

    time?: string;

}
