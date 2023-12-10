import {
  defineNamespace,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-test6-заказ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
