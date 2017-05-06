import buildParseFn from '../../../_lib/buildParseFn/index.js'

var weekdays = {
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i],
}

var months = {
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
}

var timesOfDay = {
  any: [/^н/i, /^у/i, /^д/i, /^в/i]
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
