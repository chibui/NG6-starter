class HeroController {
  constructor() {
    this.name = 'hero';
    this.customer = {};
    this.gender = [
      { value: 1.1, name: 'female' },
      { value: 1.2, name: 'male' }
    ];
    this.quoteComplete = false;
  }

  // todo: move this logic to a service so when quoteForm and quoteResults are separate components then can still communicate without two databind or using broadcasts

  performQuote() {
    if (this.legible()) {
      this.getPrice();
    } else {
      this.result = 'not legible for quote'
    }

    this.quoteComplete = true;
  }

  getPrice() {
    this.result = '$' + this.customer.age * this.customer.gender.value * 100;
  }

  legible() {
    return this.customer.age > 17 && this.customer.age < 65;
  }

  disabled() {
    return !this.quoteForm.$valid || this.quoteComplete;
  }


  resetForm() {
    this.quoteComplete = false;
    this.customer = {};
    this.quoteForm.$setPristine();
    this.result = '';
  }
}

export default HeroController;
