import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'
import {getTranslation} from '../translations/index.js'

export default function buildFormatLocale () {
  var formatters = {
    // Month: янв., фев., ..., дек.
    'MMM': function (date) {
      return getTranslation('MMM', date.getUTCMonth())
    },

    // Month: январь, февраль, ..., декабрь
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getUTCMonth())
    },

    // Day of week: вс, пн, ..., сб
    'dd': function (date) {
      return getTranslation('dd', date.getUTCDay())
    },

    // Day of week: вск, пнд, ..., суб
    'ddd': function (date) {
      return getTranslation('ddd', date.getUTCDay())
    },

    // Day of week: воскресенье, понедельник, ..., суббота
    'dddd': function (date) {
      return getTranslation('dddd', date.getUTCDay())
    },

    // Time of day: ночи, утра, дня, вечера
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
    },

    'Do': function (date, formatters) {
      return formatters.D(date) + '-е'
    },

    'Wo': function (date, formatters) {
      return formatters.W(date) + '-я'
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
  var ordinalFormatters = ['M', 'DDD', 'd', 'Q']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-й'
    }
  })

  // Generate formatters like 'D MMMM',
  // where month is in the genitive case: января, февраля, ..., декабря
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + getTranslation('MMMM', date.getUTCMonth(), {casing: 'genitive'})
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
