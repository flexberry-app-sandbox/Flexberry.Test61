import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test6-клиент', 'Unit | Serializer | i-i-s-test6-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test6-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test6-состояния',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
