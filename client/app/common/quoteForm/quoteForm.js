import angular from 'angular';
import uiRouter from 'angular-ui-router';
import quoteFormComponent from './quoteForm.component';

let quoteFormModule = angular.module('quoteForm', [
  uiRouter
])

.component('quoteForm', quoteFormComponent)

.name;

export default quoteFormModule;
