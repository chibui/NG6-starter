class QuoteFormController {
  constructor() {
    this.customer = {};
    this.gender = [
      { value: 1.1, name: 'female' },
      { value: 1.2, name: 'male' }
    ];
    this.quoteComplete = false;
  }

  performQuote() {
    if (this.quoteForm.$valid) {
      this.quoteComplete = true;
      this.getPrice();
    }
  }

  getPrice() {
    this.result = this.customer.age * this.customer.gender.value * 100;
  }

  disabled() {
    return !this.quoteForm.$valid || this.quoteComplete;
  }

  resetForm() {
    this.quoteComplete = false;
    this.customer = {};
    this.result = '';
  }
}

export default QuoteFormController;
