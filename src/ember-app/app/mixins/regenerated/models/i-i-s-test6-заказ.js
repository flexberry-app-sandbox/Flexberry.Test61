import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  статус: DS.attr('i-i-s-test6-состояния'),
  цена: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-test6-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-test6-сотрудник', { inverse: null, async: false }),
  строкаЗаказа: DS.hasMany('i-i-s-test6-строка-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-test6-заказ.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-test6-заказ', {
    статус: attr('Статус', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    клиент: belongsTo('i-i-s-test6-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-test6-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    строкаЗаказа: hasMany('i-i-s-test6-строка-заказа', 'Строка заказа', {
      сумма: attr('Сумма', { index: 0 }),
      название: attr('Название', { index: 1 }),
      товар: belongsTo('i-i-s-test6-товар', 'Товар', {
        название: attr('Название', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-test6-заказ', {
    статус: attr('Статус', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    клиент: belongsTo('i-i-s-test6-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-test6-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
