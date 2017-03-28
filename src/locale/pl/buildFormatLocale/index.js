import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'
import {getTranslation} from '../translations/index.js'

export default function buildFormatLocale () {
  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return getTranslation('MMM', date.getUTCMonth())
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getUTCMonth())
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return getTranslation('dd', date.getUTCDay())
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return getTranslation('ddd', date.getUTCDay())
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return getTranslation('dddd', date.getUTCDay())
    },

    // Time of day
    'A': function (date) {
      var hours = date.getUTCHours()
      if (hours >= 17) {
        return getTranslation('A', 3)
      } else if (hours >= 12) {
        return getTranslation('A', 2)
      } else if (hours >= 4) {
        return getTranslation('A', 1)
      } else {
        return getTranslation('A', 0)
      }
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      // Well, it should be just a number without any suffix
      return formatters[formatterToken](date).toString()
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
