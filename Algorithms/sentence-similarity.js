/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;
  const map = {};
  for (const [a, b] of similarPairs) {
    map[a] = map[a] ? map[a].add(b) : new Set([b]);
    map[b] = map[b] ? map[b].add(a) : new Set([a]);
  }
  return sentence1.every(
    (w, i) => w === sentence2[i] || map[w].has(sentence2[i])
  );
};
