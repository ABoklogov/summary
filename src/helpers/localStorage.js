export const getStorage = (value) => {
  return localStorage.getItem(value);
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};