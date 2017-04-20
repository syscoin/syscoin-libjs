'use strict';
import * as models from './models';

export interface CertNewRequest {
    

    /**
     * An alias you own.
     */
    alias?: string;

    /**
     * title, 255 bytes max.
     */
    title?: string;

    /**
     * private data, 1024 characters max.
     */
    private?: string;

    /**
     * public data, 1024 characters max.
     */
    public?: string;

    /**
     * set to No if this cert should only show in the search when safe search is not selected. Defaults to Yes (cert shows with or without safe search selected in search lists).
     */
    safesearch?: string;

    /**
     * category, 25 characters max. Defaults to certificates;
     */
    category?: string;
}
