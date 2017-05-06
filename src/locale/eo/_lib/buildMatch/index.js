import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var ordinal = /^(\d+)(-?a)?/i

var weekdays = {
  narrow: /^(di|lu|ma|me|(ĵ|jx)a|ve|sa)/i,
  short: /^(dim|lun|mar|mer|(ĵ|jx)a(ŭ|ux)|ven|sab)/i,
  long: /^(diman(ĉ|cx)o|lundo|mardo|merkredo|(ĵ|jx)a(ŭ|ux)do|vendredo|sabato)/i
}

var months = {
  short: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux)g|sep|okt|nov|dec)/i,
  long: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux)gusto|septembro|oktobro|novembro|decembro)/i
}

var timesOfDay = {
  short: /^([ap][.\s]?t[.\s]?m[.\s]?)/i,
  long: /^(anta(ŭ|ux)tagmeze|posttagmeze)/i
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
