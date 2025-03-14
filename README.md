# objectvalidator

This code is a fast and simple object validator that will examine a given object and see if
its runtime types match with an expected reference schema object.

## Install

```bash
npm install @opsimathically/objectvalidator
```

## Building from source

This package is intended to be run via npm, but if you'd like to build from source,
clone this repo, enter directory, and run `npm install` for dev dependencies, then run
`npm run build`.

## Usage

```typescript
import ObjectValidator from '@opsimathically/objectvalidator';

(async function () {
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

  const bad_match = {
    name: 'Jane',
    age: '25',
    isAdmin: false,
    email: 'jane@example.com',
    address: {
      city: 'London'
    }
  };

  // validation result will be true
  let validation_result = ObjectValidator.validate(
    good_match,
    reference_object
  );

  // validation result will be false
  validation_result = ObjectValidator.validate(bad_match, reference_object);
})();
```
