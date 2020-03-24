import Validator from 'validatorjs';

import schema from './schema';

export default async function validatePayload(payload, schemaKey) {
  const validator = new Validator(payload, schema[schemaKey]);
  const fails = await validator.fails();
  if (fails) {
    const errors = validator.errors.all();
    return errors;
  }
  return null;
}

export * from './schema';
