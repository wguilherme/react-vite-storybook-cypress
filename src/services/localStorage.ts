async function setItem(key: any, value: any) {
   localStorage.setItem(key, value);
}

async function getItem(key: any) {
  const value =  localStorage.getItem(key);
  return value;
}

async function removeItem(key: any) {
   localStorage.removeItem(key);
}

async function keys() {
  const { keys } =  await localStorage.keys();
  return keys
}

async function clear() {
   localStorage.clear();
}

export default { setItem, getItem, removeItem, keys, clear }