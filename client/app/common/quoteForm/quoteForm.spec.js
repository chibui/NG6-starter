import QuoteFormModule from './quoteForm'

describe('QuoteForm', () => {
  let $rootScope, $compile, $scope;

  beforeEach(window.module(QuoteFormModule));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  let compileComponent = () => {
    let component = $compile(angular.element('<quote-form></quote-form>'))($scope);
    $scope.$digest();
    return component;
  };


  describe('submit button', () => {

    it('should be disable until form is valid', () => {

      let component = compileComponent(),
          ctrl = component.isolateScope().$ctrl;

      spyOn(ctrl, 'performQuote');
      expect(ctrl.quoteComplete).toEqual(false);
      expect(component.find('.quoteForm__submit').is(':disabled')).toBe(true);
      expect(ctrl.performQuote).not.toHaveBeenCalled();

      ctrl.customer = {
        name: 'john',
        age: 21,
        gender: ctrl.gender[1]
      };

      $scope.$digest();
      expect(component.find('.quoteForm__submit').is(':disabled')).toBe(false);
    });
  });

  describe('quote', () => {

    it('should not submit quote if name is not valid', function () {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      spyOn(ctrl, 'performQuote');
      ctrl.customer = {
        name: 'jo',
        age: 21,
        gender: ctrl.gender[1]
      };
      $scope.$digest();
      expect(ctrl.performQuote).not.toHaveBeenCalled();
    });

    it('should not submit quote if age is not valid', function () {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      spyOn(ctrl, 'performQuote');
      ctrl.customer = {
        name: 'john',
        age: 12,
        gender: ctrl.gender[1]
      };
      $scope.$digest();
      expect(ctrl.performQuote).not.toHaveBeenCalled();
      ctrl.customer.age = 65;
      $scope.$digest();
      expect(ctrl.performQuote).not.toHaveBeenCalled();
    });

    it('should not submit quote if gender is not selected', function () {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      spyOn(ctrl, 'performQuote');
      ctrl.customer = {
        name: 'john',
        age: 21
      };
      $scope.$digest();
      expect(ctrl.performQuote).not.toHaveBeenCalled();
    });

    it('should calculate when form is valid and submit button clicked', () => {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      spyOn(ctrl, 'performQuote');

      ctrl.customer = {
        name: 'john',
        age: 21,
        gender: ctrl.gender[1]
      };

      $scope.$digest();
      expect(ctrl.performQuote).not.toHaveBeenCalled();
      component.find('.quoteForm__submit').trigger('submit');
      expect(ctrl.performQuote).toHaveBeenCalled();
    });
  });

  describe('quote price', () => {
    it('should be "1980" for a female aged 18 years old', () => {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      ctrl.customer = {
        name: 'jane',
        age: 18,
        gender: ctrl.gender[0]
      };

      $scope.$digest();

      spyOn(ctrl, 'getPrice').and.callThrough();
      component.find('.quoteForm__submit').trigger('submit');

      expect(ctrl.result).toEqual(1980);
    });

    it('should be "2160" for a male aged 18 years old', () => {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      ctrl.customer = {
        name: 'john',
        age: 18,
        gender: ctrl.gender[1]
      };

      $scope.$digest();

      spyOn(ctrl, 'getPrice').and.callThrough();
      component.find('.quoteForm__submit').trigger('submit');

      expect(ctrl.result).toEqual(2160);

    });

    it('should hide quote form and show result component on a successful price calculation', () => {
      let component = compileComponent(),
        ctrl = component.isolateScope().$ctrl;

      ctrl.customer = {
        name: 'john',
        age: 18,
        gender: ctrl.gender[1]
      };

      $scope.$digest();

      spyOn(ctrl, 'getPrice').and.callThrough();
      component.find('.quoteForm__submit').trigger('submit');
      expect(ctrl.quoteComplete).toEqual(true);
      expect(component.find('form').length).toEqual(0);
      expect(component.find('result')).toBeDefined();
    });
  });

});
