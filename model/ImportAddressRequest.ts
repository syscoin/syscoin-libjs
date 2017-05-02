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

export interface ImportAddressRequest {
    /**
     * The hex-encoded script (or address)
     */
    script: string;

    /**
     * An optional label
     */
    label?: string;

    /**
     * Rescan the wallet for transactions
     */
    rescan?: boolean;

    /**
     * Add the P2SH version of the script as well
     */
    p2sh?: boolean;

}
