/**
 * @param {string} S
 * @return {string}
 * ref: https://leetcode.com/problems/masking-personal-information
 */
function maskEmail(email) {
  email = email.toLowerCase();
  let address = '';
  let i = 0;
  while (email[i] !== '@') {
    address += email[i];
    ++i;
  }

  const first = address[0];
  const last = address[address.length - 1] || address[0];

  return first + '*****' + last + email.slice(i, email.length);
}

function maskPhoneNumber(phoneNumber) {
  let newFormatedPhoneNumber = '';
  for (let i = 0, length = phoneNumber.length; i < length; ++i) {
    const num = phoneNumber[i].charCodeAt(0);
    if (num >= 48 && num <= 57) {
      newFormatedPhoneNumber += phoneNumber[i];
    }
  }

  const phoneNumberLength = newFormatedPhoneNumber.length;
  if (phoneNumberLength === 10) {
    return '***-***-' + newFormatedPhoneNumber.slice(6, 10);
  } else {
    return (
      '+' +
      new Array(phoneNumberLength - 10).fill('*').join('') +
      '-***-***-' +
      newFormatedPhoneNumber.slice(phoneNumberLength - 4, phoneNumberLength)
    );
  }
}

function isEmail(string) {
  return string.indexOf('@') !== -1;
}

var maskPII = function (S) {
  if (isEmail(S)) {
    return maskEmail(S);
  }
  return maskPhoneNumber(S);
};
