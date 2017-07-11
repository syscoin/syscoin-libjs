/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface MessageNewRequest {
    /**
     * Subject of message.
     */
    subject: string;

    /**
     * Message to send to alias.
     */
    message: string;

    /**
     * Alias to send message from.
     */
    fromalias: string;

    /**
     * Alias to send message to.
     */
    toalias: string;

    /**
     * Is data an hex based message(only To-Message will be displayed). No by default.
     */
    hex?: string;

}