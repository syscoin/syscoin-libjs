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

export interface AddMultisigAddressRequest {
    /**
     * The number of required signatures out of the n keys or addresses.
     */
    nrequired: number;

    /**
     * A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]
     */
    keysobject: string;

    /**
     * DEPRECATED. An account to assign the addresses to.
     */
    account?: string;

}
