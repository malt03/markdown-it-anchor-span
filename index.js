// Process {{anchor}}

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;


function anchor_span(state, silent) {
  var found,
      content,
      token,
      max = state.posMax,
      start = state.pos;

  const openBracket = 0x7B; // {
  const pipe = 0x7C; // |
  const closeBracket = 0x7D; // }

  if (state.src.charCodeAt(start) !== openBracket || state.src.charCodeAt(start + 1) !== pipe) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 4 >= max) { return false; }

  state.pos = start + 2;

  while (state.pos < max - 1) {
    console.log(state.src.charCodeAt(state.pos));
    if (state.src.charCodeAt(state.pos) === pipe && state.src.charCodeAt(state.pos + 1) === closeBracket) {
      found = true;
      break;
    }

    state.md.inline.skipToken(state);
  }

  console.log(found);

  if (!found) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 2, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  // Earlier we checked !silent, but this implementation does not need it
  token         = state.push('anchor_span_open', 'anchor_span', 1);
  token.markup  = '{|';

  token         = state.push('text', '', 0);
  token.content = content.replace(UNESCAPE_RE, '$1');

  token         = state.push('anchor_span_close', 'anchor_span', -1);
  token.markup  = '|}';

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}


module.exports = function anchor_span_plugin(md) {
  md.inline.ruler.after('emphasis', 'anchor_span', anchor_span);
};
