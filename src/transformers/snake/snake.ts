const exp = {
  capital: /([a-zA-Z])\s+([a-zA-Z])/g,
  camel: /([a-z])([A-Z])/g,
  kebab: /([a-zA-Z])\-([a-zA-Z])/g
};
const fmt = '$1_$2';

export function snake(value: string) {
  Object.keys(exp).forEach((key) => {
    if (exp[key].test(value)) {
      value = value.replace(exp[key], fmt);
    }
  });
  return value?.toLowerCase();
}
