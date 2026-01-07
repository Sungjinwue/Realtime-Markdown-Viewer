var parseHeadline = function(str) {
  var headlineRegExp = /^(\#{1,6})([^\#\n]+)$/m;
  var stra = [];
  while ((stra = headlineRegExp.exec(str)) !== null) {
    var count = stra[1].length;
    var content = stra[0].slice(stra[1].length).replace(/\s+$/, '');
    var contentWithLeading = (content.charAt(0) === ' ') ? content : (' ' + content);
    str = str.replace(stra[0], '<h' + count + '>' + contentWithLeading + '</h' + count + '>' + '\n');
  }
  return str;
};

var parseHorizontalLine = function (str) {
  // match a line containing 3 or more of -, * or _ with optional spaces between
  var hrRegExp = /^[ \t]*([*_-])(?:[ \t]*\1){2,}[ \t]*$/gm;
  var match = null;
  while ((match = hrRegExp.exec(str)) !== null) {
    str = str.replace(match[0], '\n<hr/>\n');
  }
  return str;
};

var markdown = {
  parse: function (str, strict) {
    'use strict';
    var parseHeadline = function(str) {
      var headlineRegExp = /^(\#{1,6})([^\#\n]+)$/m;
      var stra = [];
      while ((stra = headlineRegExp.exec(str)) !== null) {
        var count = stra[1].length;
        var content = stra[0].slice(stra[1].length).replace(/\s+$/, '');
        var contentWithLeading = (content.charAt(0) === ' ') ? content : (' ' + content);
        str = str.replace(stra[0], '<h' + count + '>' + contentWithLeading + '</h' + count + '>' + '\n');
      }
      return str;
    };

    var parseHorizontalLine = function (str) {
      // match a line containing 3 or more of -, * or _ with optional spaces between
      var hrRegExp = /^[ \t]*([*_-])(?:[ \t]*\1){2,}[ \t]*$/gm;
      var match = null;
      while ((match = hrRegExp.exec(str)) !== null) {
        str = str.replace(match[0], '\n<hr/>\n');
      }
      return str;
    };

    var markdown = {
      parse: function (str, strict) {
        'use strict';
        str = parseHorizontalLine(str);
        str = parseHeadline(str);
        return str;
      }
    };

    module.exports = markdown;
      str = parseHorizontalLine(str);
