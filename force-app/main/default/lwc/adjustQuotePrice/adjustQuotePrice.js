/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement,api,track } from "lwc";

export default class AdjustQuotePrice extends LightningElement {
    @api recordId;
    @track adjustedAmount = 0;

    connectedCallback(){
      console.log("Inside adjustQuotePrice connectedCallback");
    }
    handleAmountChange(event) {
        // Update the adjustedAmount when the input field changes
        this.adjustedAmount = event.target.value;
    }

    handleSave() {
        // Dispatch a custom event with the adjusted amount when the "Save" button is clicked
        this.dispatchEvent(new CustomEvent('save', { detail: this.adjustedAmount }));
    }

    handleCancel() {
        // Dispatch a custom event when the "Cancel" button is clicked
        this.dispatchEvent(new CustomEvent('cancel'));
    }
}
