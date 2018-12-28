import React from 'react';
import ReactDOM from 'react-dom';
import {configs} from 'config/envConfig';

it('all config is right', () => {
  let targetConfigKey = null
  let isRight = true
  if (configs && Object.keys(configs).length > 0) {
    for (const key of Object.keys(configs)) {
      if (!targetConfigKey) {
        targetConfigKey = key
      } else {
        if (Object.keys(configs[key]).length !== Object.keys(configs[targetConfigKey]).length) {
          isRight = false
          console.log(`config keys of ${key} and ${targetConfigKey} is not match`)
        } else {
          for (const configKey of Object.keys(configs[targetConfigKey])) {
            if (!Object.keys(configs[key]).find(thisConfigKey => thisConfigKey === configKey)) {
              isRight = false
              console.log(`config keys of ${key} and ${targetConfigKey} is not match`)
            }
          }
        }
      }
    }
  } else {
    isRight = false
  }
  expect(isRight).toBe(true);
});
