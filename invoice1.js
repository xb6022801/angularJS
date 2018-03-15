angular.module('invoice1', ['currencyService'])
  .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.currency = 'yuan'
    this.currencies = currencyConverter.currencies

    this.total = function () {
      const totalPrice = this.qty * this.cost
      return currencyConverter.convert(totalPrice, this.currency)
    };

  }]);

  angular.module('currencyService',[])
  .factory('currencyConverter', function() {
    const currencies = ['eur', 'yuan', 'dollar']
    const convert = function (price, currency) {
      return price + ' ' + currency
    }
    return { currencies, convert }
  })