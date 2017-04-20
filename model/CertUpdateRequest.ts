'use strict';
import * as models from './models';

export interface CertUpdateRequest {
    

    /**
     * certificate guidkey.
     */
    guid?: string;

    /**
     * an alias you own to associate with this certificate.
     */
    alias?: string;

    /**
     * certificate title, 255 bytes max.
     */
    title?: string;

    /**
     * Private certificate data, 1024 characters max.
     */
    private?: string;

    /**
     * Public certificate data, 1024 characters max.
     */
    public?: string;

    /**
     * set to No if this cert should only show in the search when safe search is not selected. Defaults to Yes (cert shows with or without safe search selected in search lists).
     */
    safesearch?: string;

    /**
     * category, 256 characters max. Defaults to certificates
     */
    category?: string;
}
