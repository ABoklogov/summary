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

export const urlValidation = (val) => ({
  hasPassed: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([#?=&\/\w\.-]*)*\/?/.test(val),
  message: 'Некорректный url'
});

export const emailValidation = (val) => ({
  hasPassed: /^(mailto?:)?[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Некорректный имейл'
});

export const phoneValidation = (val) => ({
  hasPassed: /^(tel?:)?((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(val),
  message: 'Некорректный телефон'
});
