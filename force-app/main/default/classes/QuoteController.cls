public with sharing class QuoteController {
    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuoteData(Id quoteId) {
        Quote__c quote = [SELECT Id, Name, StartDate__c, EndDate__c FROM Quote__c WHERE Id = :quoteId LIMIT 1];
        return new QuoteDto(quote);
    }

    @AuraEnabled
    public static void updateQuoteDates(Id quoteId, Date startDate, Date endDate) {
        Database.update(new Quote__c(
            Id = quoteId,
            StartDate__c = startDate,
            EndDate__c = endDate
        ));
    }
    
}