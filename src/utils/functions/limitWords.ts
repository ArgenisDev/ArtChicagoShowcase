export const limitWords = (text: string) => {
  if (text.length > 20) return `${text.substring(0, 19)}...`;
  return text;
};
