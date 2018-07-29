import ResultModule from './result'
import 'angular-mocks'

describe('Result', () => {
  let $rootScope, $compile, $scope;

  beforeEach(window.module(ResultModule));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $scope = $rootScope.$new();

  }));

  let compileComponent = (result, name) => {
    $scope.result = result;
    $scope.name = name;

    let component = $compile(angular.element('<result result="result" name="name"></result>'))($scope);
    $scope.$digest();
    return component;
  };

  describe('content', () => {

    let result = 1234,
      name = 'John';

    it('should show customers name', () => {

      let component = compileComponent(result, name),
          ctrl = component.isolateScope().$ctrl;
      console.log(ctrl);
      console.log(component);

      expect(component.find('.quoteResult__gratitude').text()).toContain(name);
    });

    it('should show customers quote with currency filter', () => {

      let component = compileComponent(result, name),
          ctrl = component.isolateScope().$ctrl;
      console.log(ctrl);
      console.log(component);

      expect(component.find('.quoteResult__result').text()).toContain('$1,234.00');
    });
  });
});
