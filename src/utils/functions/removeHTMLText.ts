export const removeHTML = (text: string) => {
  const regex = /(<([^>]+)>)/gi;
  return text?.replace(regex, '');
};
