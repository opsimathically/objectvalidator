/* eslint-disable @typescript-eslint/no-explicit-any */

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%% ObjectValidator Class %%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// This code recurses through an object matching an existing type, to a defined
// schema-like object.  It's very simple, intentionally, and only returns true 
// or false (match/mismatch).
/*
  // Example usage:

  // This is our reference object (schema-like)
  const reference_object = {
      name: '',
      age: 0,
      isAdmin: false,
      address: {
          city: '',
          country: ''
      }
  };
  
  // will compare to true as all properties are in place
  const data1 = {
      name: 'John',
      age: 30,
      isAdmin: true,
      address: {
          city: 'New York',
          country: 'USA'
      }
  };
  
  // will compare as false due to missing properties
  const data2 = {
      name: 'Jane',
      age: '25',
      isAdmin: false,
      email: 'jane@example.com',
      address: {
          city: 'London'
      }
  };
  
  // returns true
  console.log(ObjectValidator.validate(data1, reference_object)); 
  
  // returns false
  console.log(ObjectValidator.validate(data2, reference_object)); 
  
  */

  export default class ObjectValidator {
    constructor() {}
  
    // Validate Object Structure
    static validate(data: any, reference_object: any) {
      if (typeof data !== 'object') return false;
      if (typeof reference_object !== 'object') return false;
      if (data === null && reference_object === null) return true;
      function validateKeysAndTypes(data: any, reference_object: any) {
        const reference_keys = Object.keys(reference_object);
        for (const key of reference_keys) {
          if (!(key in data)) return false;
          if (
            typeof data[key] === 'object' &&
            typeof reference_object[key] === 'object'
          ) {
            if (!validateKeysAndTypes(data[key], reference_object[key]))
              return false;
          } else {
            if (typeof data[key] !== typeof reference_object[key]) return false;
          }
        }
        return true;
      }
      return validateKeysAndTypes(data, reference_object);
    }
  }
  