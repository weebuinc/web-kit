export function camel(value: string) {
  return value.toLowerCase().replace(/(\-|\_|\s)\w/gi, (match) => match.toUpperCase().substring(1));
}
