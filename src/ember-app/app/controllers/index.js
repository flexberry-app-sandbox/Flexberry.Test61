import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: 'i-i-s-test6-заказ-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-test6-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-test6-заказ-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-test6-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-test6-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-test6-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-test6-товар-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-test6-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-test6-товар-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test6-клиент-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-test6-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-test6-клиент-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})