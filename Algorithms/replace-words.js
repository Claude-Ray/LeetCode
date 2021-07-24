/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  dictionary = dictionary
    .sort()
    .filter((root, i, dict) => i === 0 || !root.startsWith(dict[i - 1]));
  const cache = {};
  return sentence
    .split(' ')
    .map(word => {
      if (cache[word]) return cache[word];
      const root = dictionary.find(root => word.startsWith(root));
      if (!root) return word;
      cache[word] = root;
      return root;
    })
    .join(' ');
};
