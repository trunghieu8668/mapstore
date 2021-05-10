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
  while(txt.charAt(0) === character)
  {
   s = s.substring(1);
  }
  
  return s !== undefined ? s : txt
}