import template from './result.html';
import controller from './result.controller';
import './result.scss';

let resultComponent = {
  bindings: {
    result: '<',
    name: '<',
    resetQuote: '&'
  },
  template,
  controller
};

export default resultComponent;
