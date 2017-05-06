import buildParseFn from '../../../_lib/buildParseFn/index.js'

var weekdays = {
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i],
}

var months = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var timesOfDay = {
  any: [/^a/i, /^p/i]
}

export default function buildParse () {
  return {
    ordinal: function (matchResult) {
      return parseInt(matchResult[1], 10)
    },
    weekday: buildParseFn(weekdays, 'any'),
    month: buildParseFn(months, 'any'),
    timeOfDay: buildParseFn(timesOfDay, 'any')
  }
}
