import { useState } from 'react';
import checkValidation from './validation';
function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

function stateFactory(fields) {
  const keys = Object.keys(fields);
  let acc = {};
  for (const key of keys) {
    if (key !== 'errors') {
      acc[key] = {
        value: isObject(fields[key])
          ? '' + (fields[key].value || '')
          : '' + (fields[key] || ''),
        meta: {
          touched: false
        }
      };
    }
  }
  return acc;
}

function extendsValidations(key, state, rules, value) {
  return {
    ...state.errors,
    [key]: checkValidation(rules[key], value, state)
  };
}

function onChangeHandlerByKey(state, key, setState, rules) {
  return event => {
    event.persist();
    const value = event.currentTarget.value;
    const newState = {
      ...state,
      [key]: {
        ...state[key],
        value,
        meta: {
          touched: true
        }
      },
      errors: extendsValidations(key, state, rules, value)
    };
    setState({...newState, dirty: true});
  };
}

function onBlurHandle(state, key, setState, rules) {
  return _ => {
    const customMeta = {
      ...state,
      [key]: {
        ...state[key],
        meta: {
          ...state[key].meta,
          touched: true
        },
        errors: state.errors
      }
    };

    const newState = {
      ...state,
      [key]: {
        ...state[key],
        meta: {
          ...state[key].meta,
          touched: true
        }
      },
      errors: extendsValidations(key, customMeta, rules, state[key].value)
    };
    setState({...newState, dirty: true});
  };
}

function formDataFactory(state, setState, rules) {
  const keys = Object.keys(state);
  let acc = {};
  for (const key of keys) {
    if (key !== 'errors') {
      acc[key] = {
        meta: state[key].meta,
        input: {
          value: state[key].value,
          onChange: onChangeHandlerByKey(state, key, setState, rules),
          onBlur: onBlurHandle(state, key, setState, rules)
        }
      };
    }
  }
  return acc;
}

const useForm = rules => {
  const initialState = stateFactory(rules);
  const [data, setAllData] = useState({ ...initialState, errors: {} });
  const form = formDataFactory(data, setAllData, rules);
  const setValues = obj => {
    if (isObject(obj) && !obj.errors) {
      setAllData({ ...data, ...stateFactory(obj), errors: {} });
    } else {
      throw new Error('Please Pass only object and do not use errors key');
    }
  };
  const getData = () => {
    const keys = Object.keys(data);
    let acc = {};
    for (const key of keys) {
      if (key !== 'errors') {
        acc[key] = data[key].value;
      }
    }
    return acc;
  };

  const validateForm = () => {
    const keys = Object.keys(data);
    let errors = {};
    let valid = true;
    for (const key of keys) {
      if (key !== 'errors' && key !== 'dirty') {
        const msg = checkValidation(rules[key], data[key].value, data);
        if (msg) {
          errors[key] = msg;
          valid = false;
        }
      }
    }
    setAllData({ ...data, errors });
    return valid;
  };

  return {
    form,
    setValues,
    errors: data.errors,
    getData,
    validateForm
  };
};

export default useForm;
