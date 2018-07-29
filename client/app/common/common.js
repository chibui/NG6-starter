import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Result from './result/result';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User
  Result
])
  
.name;

export default commonModule;
