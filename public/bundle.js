require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"markdown":[function(require,module,exports){
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

},{}]},{},[]);
