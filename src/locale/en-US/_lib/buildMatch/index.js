import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'

var ordinal = /^(\d+)(th|st|nd|rd)?/i

var weekdays = {
  narrow: /^(su|mo|tu|we|th|fr|sa)/i,
  short: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  long: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}

var weekday = {
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
}

var months = {
  short: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  long: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}

var month = {
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}

var timesOfDay = {
  short: /^(am|pm)/i,
  long: /^([ap]\.?\s?m\.?)/i
}

var timeOfDay = {
  any: [/^a/i, /^p/i]
}

export default function buildMatch () {
  return {
    ordinalNumbers: function (dirtyString) {
      var string = String(dirtyString)
      return string.match(ordinal)
    },

    ordinalNumber: function (matchResult) {
      return parseInt(matchResult[1], 10)
    },

    weekdays: buildMatchFn(weekdays, 'long'),
    weekday: buildParseFn(weekday, 'any'),
    months: buildMatchFn(months, 'long'),
    month: buildParseFn(month, 'any'),
    timesOfDay: buildMatchFn(timesOfDay, 'long'),
    timeOfDay: buildParseFn(timeOfDay, 'any')
  }
}
