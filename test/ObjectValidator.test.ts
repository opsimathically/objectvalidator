import test from 'node:test';
import assert from 'node:assert';
import ObjectValidator from '@src/ObjectValidator.class';

(async function () {
  test('Validate good match.', async function () {
    const reference_object = {
      name: '',
      age: 0,
      isAdmin: false,
      address: {
        city: '',
        country: ''
      }
    };

    const good_match = {
      name: 'John',
      age: 30,
      isAdmin: true,
      address: {
        city: 'New York',
        country: 'USA'
      }
    };

    const validation_result = ObjectValidator.validate(
      good_match,
      reference_object
    );

    if (validation_result !== true)
      assert.fail('Object validator failed to match on known good data.');
  });

  test('Validate bad match.', async function () {
    const reference_object = {
      name: '',
      age: 0,
      isAdmin: false,
      address: {
        city: '',
        country: ''
      }
    };

    const bad_match = {
      name: 'Jane',
      age: '25',
      isAdmin: false,
      email: 'jane@example.com',
      address: {
        city: 'London'
      }
    };

    const validation_result = ObjectValidator.validate(
      bad_match,
      reference_object
    );

    if (validation_result !== false)
      assert.fail('Object validator failed to detect known bad data.');
  });
})();
