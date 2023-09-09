const exp = {
  capital: /([a-zA-Z])\s+([a-zA-Z])/g,
  camel: /([a-z])([A-Z])/g,
  snake: /([a-zA-Z])\_([a-zA-Z])/g
};
const fmt = '$1-$2';

export function kebab(value: string) {
  Object.keys(exp).forEach((key: keyof typeof exp) => {
    if (exp[key].test(value)) {
      value = value.replace(exp[key], fmt);
    }
  });
  return value?.toLowerCase();
}
