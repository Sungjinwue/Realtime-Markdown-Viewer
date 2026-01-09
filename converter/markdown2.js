var parseHeadline = function(str) {
  var headlineRegExp = /^(\#{1,6})([^\#\n]+)$/m;
  var stra = [];
  while ((stra = headlineRegExp.exec(str)) !== null) {
    var count = stra[1].length;
    var content = stra[0].slice(stra[1].length).replace(/^\s+|\s+$/g, '');
    str = str.replace(stra[0], '<h' + count + '>' + content + '</h' + count + '>' + '\n');
  }
  return str;
};

var parseHorizontalLine = function (str) {
  var hrRegExp = /^[ \t]*([*_-])(?:[ \t]*\1){2,}[ \t]*$/gm;
  var match = null;
  while ((match = hrRegExp.exec(str)) !== null) {
    str = str.replace(match[0], '\n<hr/>\n');
  }
  return str;
};

var parseLink = function(str) {
  var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/g;
  var m = null;
  while ((m = linkRegExp.exec(str)) !== null) {
    str = str.replace(m[0], '<a ' + 'href="' + m[2] + '">' + m[1] + '</a>');
  }
  return str;
};

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHorizontalLine(str);
    str = parseHeadline(str);
    str = parseLink(str);
    return str;
  }
};

module.exports = markdown;
