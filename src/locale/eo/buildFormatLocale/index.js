import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'
import {getTranslation} from '../translations/index.js'

export default function buildFormatLocale () {
  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return getTranslation('MMM', date.getUTCMonth())
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getUTCMonth())
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return getTranslation('dd', date.getUTCDay())
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return getTranslation('ddd', date.getUTCDay())
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return getTranslation('dddd', date.getUTCDay())
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('A', 1) : getTranslation('', 0)
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('a', 1) : getTranslation('', 0)
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? getTranslation('aa', 1) : getTranslation('', 0)
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
