public with sharing class QuoteDto extends BaseDto {
  //Changed the public properties (startDate and endDate) to use the { get; set; } syntax for better encapsulation and adherence to Apex best practices. 
  @AuraEnabled
  public Date startDate { get; set; }

  @AuraEnabled
  public Date endDate { get; set; }

  public QuoteDto() {
      // Initialized the startDate and endDate properties in this default constructor to avoid potential null pointer exceptions.
      this.startDate = Date.today();
      this.endDate = Date.today();
  }

  public QuoteDto(Quote__c quote) {
      super(quote);
      this.startDate = quote.StartDate__c;
      this.endDate = quote.EndDate__c;
      this.name =  quote.Name;
  }

  public override SObject refreshSo() {
      return null;
  }
}
