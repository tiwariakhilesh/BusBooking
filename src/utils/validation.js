function validEmail(email) {
  var re = /^[-a-z0-9~!$%^&*_=+}{?]+(\.[-a-z0-9~!$%^&*_=+}{?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  return re.test(email);
}

export default (rules, value, state) => {
  if (rules.rules) {
    for (const rule of rules.rules) {
      switch (rule.test) {
        case 'required':
          if (value.trim() === '') {
            return (
              rule.message ||
              rules.custom ||
              `Please fill out ${rule.name || 'this feild'}`
            );
          }
          break;
        case 'email':
          if (!validEmail(value)) {
            return (
              rule.message || rules.custom || `${value} is not a valid email.`
            );
          }
          break;
        case 'number':
          if (!/^[0-9]+$/.test(value)) {
            return (
              rule.message ||
              rules.custom ||
              `${rule.name || 'This feild'} must be composed only with numbers`
            );
          }
          break;
        case 'min':
          if (value.trim().length < rule.min) {
            return (
              rule.message ||
              rules.custom ||
              `${rule.name || 'This feild'} must be minimum ${
                rule.min
              } characters`
            );
          }
          break;
        case 'max':
          if (value.trim().length > rule.max) {
            return (
              rule.message ||
              rules.custom ||
              `${rule.name || 'This feild'} must be maximum ${
                rule.max
              } characters`
            );
          }
          break;
        case 'compare':
          if (state[rule.compare].value !== value) {
            return (
              rule.message ||
              rules.custom ||
              `${rule.name || 'This feild'} do not match with ${rule.compare}`
            );
          }
          break;
        default:
          if (rule.test instanceof RegExp) {
            if (!rule.test.test(value)) {
              return (
                rule.message ||
                rules.custom ||
                `Please fill out ${rule.name || 'this feild'}`
              );
            }
          } else if (typeof rule.test === 'function') {
            if (!rule.test(value)) {
              return rule.message || rules.custom;
            }
          }
      }
    }
  }
  return '';
};
