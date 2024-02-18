/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getQuoteData from '@salesforce/apex/QuoteController.getQuoteData';
import updateQuoteDates from '@salesforce/apex/QuoteController.updateQuoteDates';

export default class EditQuote extends LightningElement {
    @api recordId;
    @track quoteData = {};
    @track startDate;
    @track endDate;
    @track isLoading;

    connectedCallback() {
        this.isLoading = true;

        // Retrieve quote data using Apex method and QuoteDto
        getQuoteData({ quoteId: this.recordId })
            .then(result => {
                ({ startDate: this.startDate, endDate: this.endDate, ...this.quoteData } = result);
                this.isLoading = false;
            })
            .catch(error => {
                this.isLoading = false;
                console.error('Error fetching quote data:', error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Failed to retrieve quote data',
                        variant: 'error'
                    })
                );
            });
    }

    handleStartDateChange(event) {
        this.startDate = event.target.value;
    }

    handleEndDateChange(event) {
        this.endDate = event.target.value;
    }

    handleSave() {
        // Update start and end dates on the quote record
        updateQuoteDates({
            quoteId: this.recordId,
            startDate: this.startDate,
            endDate: this.endDate
        })
        .then(() => {
            // Handle successful update
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Saved Quote Details',
                    variant: 'success'
                })
            );
            return refreshApex(); // Refresh the displayed data after update
        })
        .catch(error => {
            console.error('Error updating quote data:', error);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Failed to update quote dates',
                    variant: 'error'
                })
            );
        });
    }
}
