import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'
import {getTranslation} from '../translations/index.js'

export default function buildFormatLocale () {
  var formatters = {
    // Month: jan, feb, ..., dec
    'MMM': function (date) {
      return getTranslation('MMM', date.getUTCMonth())
    },

    // Month: január, február, ..., december
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getUTCMonth())
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return getTranslation('dd', date.getUTCDay())
    },

    // Day of week: neď, pon, ..., sob
    'ddd': function (date) {
      return getTranslation('ddd', date.getUTCDay())
    },

    // Day of week: neďeľa, pondelok, ..., sobota
    'dddd': function (date) {
      return getTranslation('dddd', date.getUTCDay())
    },

    // AM, PM
    'A': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('A', 1) : getTranslation('', 0)
    },

    // am, pm
    'a': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('a', 1) : getTranslation('', 0)
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('aa', 1) : getTranslation('', 0)
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}

function ordinal (number) {
  return number + '.'
}
