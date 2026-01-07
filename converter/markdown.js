 var parseHeadline = function(str) {
   var headlineRegExp = /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     var content = stra[2].replace(/\s+$/, '');
     str = str.replace(stra[0], '<h' + count + '>' + content + '</h' + count + '>' + '\n');
   }
   return str;
 }

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHeadline(str);
    return str;
  }
};

module.exports = markdown;
