import buildLocalize from '../_lib/buildLocalize/index.js'
import buildFormatters from '../_lib/buildFormatters/index.js'
import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

var formatters = buildFormatters()

export default function buildLocale () {
  return {
    localize: buildLocalize(),
    formatters: formatters,
    match: buildMatch(),
    parse: buildParse(),
    formattingTokensRegExp: buildTokensRegExp(formatters),
    options: {
      weekStartsOn: 1 /* Monday */,
      firstWeekContains: 4 /* Thursday */
    }
  }
}
