import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test6-заказ', 'Unit | Model | i-i-s-test6-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test6-заказ',
    'model:i-i-s-test6-клиент',
    'model:i-i-s-test6-сотрудник',
    'model:i-i-s-test6-строка-заказа',
    'model:i-i-s-test6-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
