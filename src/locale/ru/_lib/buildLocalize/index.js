import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'
import localizeDistanceInWords from './distanceInWords/index.js'

var weekdays = {
  narrow: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  short: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'],
  long: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
}

var months = {
  short: ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
  long: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  longGenitive: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
}

var timesOfDay = {
  long: ['ночи', 'утра', 'дня', 'вечера']
}

function ordinal (dirtyNumber, dirtyOptions) {
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  var suffix

  if (unit === 'date') {
    suffix = '-е'
  } else if (unit === 'isoWeek') {
    suffix = '-я'
  } else {
    suffix = '-й'
  }

  return dirtyNumber + suffix
}

export default function buildLocalize () {
  return {
    ordinal: ordinal,
    weekday: buildLocalizeFn(weekdays, 'long'),
    weekdays: buildLocalizeArrayFn(weekdays, 'long'),
    month: buildLocalizeFn(months, 'long'),
    months: buildLocalizeArrayFn(months, 'long'),
    timeOfDay: buildLocalizeFn(timesOfDay, 'long', function (hours) {
      if (hours >= 17) {
        return locale.timesOfDay.long[3]
      } else if (hours >= 12) {
        return locale.timesOfDay.long[2]
      } else if (hours >= 4) {
        return locale.timesOfDay.long[1]
      } else {
        return locale.timesOfDay.long[0]
      }
    }),
    timesOfDay: buildLocalizeArrayFn(timesOfDay, 'long'),
    distanceInWords: localizeDistanceInWords,
    setTimeOfDay: setTimeOfDay
  }
}
