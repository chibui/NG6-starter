import angular from 'angular';
import QuoteForm from './quoteForm/quoteForm';
import Result from './result/result';

let commonModule = angular.module('app.common', [
  QuoteForm,
  Result
])

.name;

export default commonModule;
