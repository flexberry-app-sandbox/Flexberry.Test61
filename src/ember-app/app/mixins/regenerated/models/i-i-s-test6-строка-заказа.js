import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  во: DS.attr('number'),
  название: DS.attr('string'),
  сумма: DS.attr('decimal'),
  товар: DS.belongsTo('i-i-s-test6-товар', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-test6-заказ', { inverse: 'строкаЗаказа', async: false })
});

export let ValidationRules = {
  во: {
    descriptionKey: 'models.i-i-s-test6-строка-заказа.validations.во.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-test6-строка-заказа.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-test6-строка-заказа.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-test6-строка-заказа.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-test6-строка-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаЗаказаE', 'i-i-s-test6-строка-заказа', {
    сумма: attr('Сумма', { index: 0 }),
    название: attr('Название', { index: 1 }),
    товар: belongsTo('i-i-s-test6-товар', 'Товар', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' })
  });
};
