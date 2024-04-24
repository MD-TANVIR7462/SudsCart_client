export const setLocalstorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};
export const removeLocalstorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};
