import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var ordinal = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i

var weekdays = {
  narrow: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су).?/i,
  short: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  long: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}

var months = {
  short: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек).?/i,
  long: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}

var timesOfDay = {
  long: /^(ноч[иь]|утр[ао]|дня|день|вечера?)/i
}

export default function buildMatch () {
  return {
    ordinal: function (dirtyString) {
      var string = String(dirtyString)
      return string.match(ordinal)
    },

    weekdays: buildMatchFn(weekdays, 'long'),
    months: buildMatchFn(months, 'long'),
    timesOfDay: buildMatchFn(timesOfDay, 'long')
  }
}
