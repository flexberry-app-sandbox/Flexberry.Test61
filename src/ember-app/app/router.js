import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test6-заказ-l');
  this.route('i-i-s-test6-заказ-e',
  { path: 'i-i-s-test6-заказ-e/:id' });
  this.route('i-i-s-test6-заказ-e.new',
  { path: 'i-i-s-test6-заказ-e/new' });
  this.route('i-i-s-test6-клиент-l');
  this.route('i-i-s-test6-клиент-e',
  { path: 'i-i-s-test6-клиент-e/:id' });
  this.route('i-i-s-test6-клиент-e.new',
  { path: 'i-i-s-test6-клиент-e/new' });
  this.route('i-i-s-test6-сотрудник-l');
  this.route('i-i-s-test6-сотрудник-e',
  { path: 'i-i-s-test6-сотрудник-e/:id' });
  this.route('i-i-s-test6-сотрудник-e.new',
  { path: 'i-i-s-test6-сотрудник-e/new' });
  this.route('i-i-s-test6-товар-l');
  this.route('i-i-s-test6-товар-e',
  { path: 'i-i-s-test6-товар-e/:id' });
  this.route('i-i-s-test6-товар-e.new',
  { path: 'i-i-s-test6-товар-e/new' });
});

export default Router;
