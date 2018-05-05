const codes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const radix = codes.length;
const prefix = 'http://tinyurl.com/';
const urlMap = new Map();

let count = 0;

/**
 * Generate a short url by index.
 * 
 * @param {number} index
 * @return {string}
 */
function tinyUrl(index) {
  let str = '';
  do {
    str += codes[~~index % radix];
    index /= radix;
  } while (index);
  return str;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const postfix = tinyUrl(count++);
  urlMap.set(postfix, longUrl);
  return `${prefix}${postfix}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return urlMap.get(shortUrl.replace(prefix, ''));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */