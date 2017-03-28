import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import {getTranslation} from './translations/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Korean locale.
 * @author Hong Chulju [@angdev]{@link https://github.com/angdev}
 */
const koLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}

export default koLocale
