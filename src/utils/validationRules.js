export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Заполните это поле'
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: `Должно быть не более ${limit} символов`
});

export const loginValidation = (val) => ({
  hasPassed: val.length > 1,
  message: 'Минимум 2 символа'
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/.test(val),
  message: 'Должно быть: строчные латинские буквы и цифры'
});
