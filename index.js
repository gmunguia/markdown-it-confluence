'use strict';

module.exports = function umlPlugin(md) {

  function confluence(tokens, idx) {
    var token = tokens[idx],
        srcIndex = token.attrIndex('src'),
        titleIndex = token.attrIndex('title'),
        alt = 'ac:alt="' + token.content + '"',
        title = 'ac:title="' + token.attrs[titleIndex][1] + '"',
        url = '<ri:url ri:value="' + token.attrs[srcIndex][1] + '" />';

    return '<ac:image ' + alt + ' ' + title + '>' + url + '</ac:image>';
  }

  md.renderer.rules.image = confluence;
};
