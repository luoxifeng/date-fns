export default function buildFormatters () {
  var formatters = {}

  // Generate formatters like 'D MMMM',
  // where month is in the genitive case: января, февраля, ..., декабря
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, options) {
      var commonFormatters = options.formatters
      var formatter = commonFormatters[formatterToken]
      var localize = options.localize
      return formatter(date, options) + ' ' + localize.month(date.getUTCMonth(), {type: 'longGenitive'})
    }
  })

  return formatters
}
