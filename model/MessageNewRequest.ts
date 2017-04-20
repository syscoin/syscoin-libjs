'use strict';
import * as models from './models';

export interface MessageNewRequest {
    

    /**
     * Subject of message.
     */
    subject?: string;

    /**
     * Message to send to alias.
     */
    message?: string;

    /**
     * Alias to send message from.
     */
    fromalias?: string;

    /**
     * Alias to send message to.
     */
    toalias?: string;

    /**
     * Is data an hex based message(only To-Message will be displayed). No by default.
     */
    hex?: string;
}
