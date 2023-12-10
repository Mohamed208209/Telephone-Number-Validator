function telephoneCheck(str) {
  const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

  return regExp.test(str);
}

telephoneCheck("1 456 789 4444")
