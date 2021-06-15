// /* eslint-disable */
// "use strict";

// export var Util = function () {
//   /**
//    * Get GET parameter value from URL.
//    * @param {string} paramName Parameter name.
//    * @returns {string}
//    */
//   getURLParam: function (paramName) {
//     var searchString = window.location.search.substring(1),
//       i, val, params = searchString.split("&");

//     for (i = 0; i < params.length; i++) {
//       val = params[i].split("=");
//       if (val[0] == paramName) {
//         return unescape(val[1]);
//       }
//     }

//     return null;
//   }
// }();

export const removeFirstCharacter = (txt, character) => {
  let s = "";
  while (txt.charAt(0) === character) {
    s = s.substring(1);
  }

  return s !== undefined ? s : txt;
};

export const DecodeUnicode = (str) => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, '-');
  str = str.replace(/-+-/g, '-');
  str = str.replace(/^\-+|\-+$/g, '');
  return str;
}