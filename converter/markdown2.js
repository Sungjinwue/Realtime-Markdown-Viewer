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
  var linkRegExp = /!?\[([^\[]+)\]\(([^\)]+)\)/g;
  var m = null;
  while ((m = linkRegExp.exec(str)) !== null) {
    if (m[0].substr(0, 1) === '!') {
      str = str.replace(m[0], '<img src="' + m[2] + '" alt="' + m[1] + '" title="' + m[1] + '" />\n');
    } else {
      str = str.replace(m[0], '<a ' + 'href="' + m[2] + '">' + m[1] + '</a>');
    }
  }
  return str;
};

var parseBold = function(str) {
  var boldRegExp = /(\*\*)(.*?)\1/g;
  var m = null;
  while ((m = boldRegExp.exec(str)) !== null) {
    str = str.replace(m[0], '<b>' + m[2] + '</b>');
  }
  return str;
};

var parseStrong = function(str) {
  var strongRegExp = /(~~)(.*?)\1/g;
  var m = null;
  while ((m = strongRegExp.exec(str)) !== null) {
    str = str.replace(m[0], '<strong>' + m[2] + '</strong>');
  }
  return str;
};

var parseItalic = function(str) {
  var italicRegExp = /(\*|_)(.*?)\1/g;
  var m = null;
  while ((m = italicRegExp.exec(str)) !== null) {
    str = str.replace(m[0], '<i>' + m[2] + '</i>');
  }
  return str;
};

var parseCodeBlock = function(str) {
  var codeRegExp = /`{1}(\w+)`{1}/g;
  var m = null;
  while ((m = codeRegExp.exec(str)) !== null) {
    str = str.replace(m[0], '<pre>' + m[1] + '</pre>');
  }
  return str;
};

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHorizontalLine(str);
    str = parseHeadline(str);
    str = parseBold(str);
    str = parseStrong(str);
    str = parseItalic(str);
    str = parseLink(str);
    str = parseCodeBlock(str);
    return str;
  }
};

module.exports = markdown;
