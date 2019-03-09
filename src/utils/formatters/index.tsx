const formatAuthors = (authors: string[]): string => {
  let result: string = '';
  for (let i = 0; i < authors.length; i++) {
    if (i === (authors.length - 1)) {
      result += authors[i];
    } else {
      result += (authors[i] + ', ');
    }
  }

  return result;
};

export {
  formatAuthors,
};