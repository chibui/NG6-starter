import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resultComponent from './result.component';

let resultModule = angular.module('result', [
  uiRouter
])

.component('result', resultComponent)

.name;

export default resultModule;
