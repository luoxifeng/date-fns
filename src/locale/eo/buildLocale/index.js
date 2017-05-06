import buildLocalize from '../_lib/buildLocalize/index.js'
import buildMatch from '../_lib/buildMatch/index.js'
import buildParse from '../_lib/buildParse/index.js'

export default function buildLocale () {
  return {
    localize: buildLocalize(),
    match: buildMatch(),
    parse: buildParse(),
    formatters: {},
    parsers: {},
    units: {},
    options: {
      weekStartsOn: 1 /* Monday */,
      firstWeekContains: 4 /* Thursday */
    }
  }
}
