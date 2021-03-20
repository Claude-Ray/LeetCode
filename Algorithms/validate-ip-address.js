/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (isIPv4(IP)) return 'IPv4';
  if (isIPv6(IP)) return 'IPv6';
  return 'Neither';
};

function isIPv4(IP) {
  const nums = IP.split('.');
  return (
    nums.length === 4 &&
    nums.every(n => n >= 0 && n <= 255 && /^[0-9]$|^[1-9][0-9]{1,2}$/.test(n))
  );
}

function isIPv6(IP) {
  const nums = IP.split(':');
  return (
    nums.length === 8 &&
    nums.every(n => n.length >= 1 && n.length <= 4 && /^[a-fA-F0-9]+$/.test(n))
  );
}
