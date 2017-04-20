'use strict';
import * as models from './models';

export interface EscrowFeedbackRequest {
    

    escrowguid?: string;

    userrole?: string;

    feedbackprimary?: string;

    ratingprimary?: number;

    feedbacksecondary?: string;

    ratingsecondary?: number;
}
