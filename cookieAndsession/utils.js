/**
 * 解析成{k:v}形式
 */
exports.parseCookie = function (cookie){
  const cookies = {};
  if (cookie) {
    const iList = cookie.split(';');
    iList.forEach(item => {
      const couple = item.split('=');
      cookies[couple[0].trim()] = couple[1];
    });
  }
  return cookies;
}

exports.serialize = function (key, val, opt) {
  
}