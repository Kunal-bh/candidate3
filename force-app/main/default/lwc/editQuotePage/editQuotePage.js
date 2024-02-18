/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api,track } from "lwc";

export default class EditQuotePage extends LightningElement {
    @api recordId;
    @track isAdjustingQuote = false;

    handleAdjustQuote() {
        // Open the Adjust Quote Price dialog when the "Adjust Quote" button is clicked
        this.isAdjustingQuote = true;
    }

    handleSaveAdjustment(event) {
        // Handle the save logic for the adjusted amount
        const adjustedAmount = event.detail;
        // Perform the necessary logic to save the adjusted amount to the quote record
        // ...
        // Close the Adjust Quote Price dialog
        this.isAdjustingQuote = false;
    }

    handleCancelAdjustment() {
        // Handle the cancel logic for the adjustment
        // Close the Adjust Quote Price dialog
        this.isAdjustingQuote = false;
    }
}
