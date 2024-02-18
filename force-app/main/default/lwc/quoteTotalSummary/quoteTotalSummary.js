/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement } from 'lwc';

export default class QuoteTotalSummary extends LightningElement {
    handleAdjustQuote() {
        
      console.log("Inside handleAdjustQuote quoteTotalSummary");
        // Dispatch a custom event to inform the parent (editQuotePage) that the "Adjust Quote" button is clicked
        this.dispatchEvent(new CustomEvent('adjustquote'));
    }
}

