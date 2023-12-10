import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest6ЗаказLForm from './forms/i-i-s-test6-заказ-l';
import IISTest6КлиентLForm from './forms/i-i-s-test6-клиент-l';
import IISTest6СотрудникLForm from './forms/i-i-s-test6-сотрудник-l';
import IISTest6ТоварLForm from './forms/i-i-s-test6-товар-l';
import IISTest6ЗаказEForm from './forms/i-i-s-test6-заказ-e';
import IISTest6КлиентEForm from './forms/i-i-s-test6-клиент-e';
import IISTest6СотрудникEForm from './forms/i-i-s-test6-сотрудник-e';
import IISTest6ТоварEForm from './forms/i-i-s-test6-товар-e';
import IISTest6ЗаказModel from './models/i-i-s-test6-заказ';
import IISTest6КлиентModel from './models/i-i-s-test6-клиент';
import IISTest6СотрудникModel from './models/i-i-s-test6-сотрудник';
import IISTest6СтрокаЗаказаModel from './models/i-i-s-test6-строка-заказа';
import IISTest6ТоварModel from './models/i-i-s-test6-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test6-заказ': IISTest6ЗаказModel,
    'i-i-s-test6-клиент': IISTest6КлиентModel,
    'i-i-s-test6-сотрудник': IISTest6СотрудникModel,
    'i-i-s-test6-строка-заказа': IISTest6СтрокаЗаказаModel,
    'i-i-s-test6-товар': IISTest6ТоварModel
  },

  'application-name': 'Test6',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test6',
          title: 'Test6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          'i-i-s-test6-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test6-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test6-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-test6-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        test6: {
          caption: 'Test6',
          title: 'Test6',
          'i-i-s-test6-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-test6-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test6-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-test6-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test6-заказ-l': IISTest6ЗаказLForm,
    'i-i-s-test6-клиент-l': IISTest6КлиентLForm,
    'i-i-s-test6-сотрудник-l': IISTest6СотрудникLForm,
    'i-i-s-test6-товар-l': IISTest6ТоварLForm,
    'i-i-s-test6-заказ-e': IISTest6ЗаказEForm,
    'i-i-s-test6-клиент-e': IISTest6КлиентEForm,
    'i-i-s-test6-сотрудник-e': IISTest6СотрудникEForm,
    'i-i-s-test6-товар-e': IISTest6ТоварEForm
  },

});

export default translations;
