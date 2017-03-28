import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import {getTranslation} from './translations/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Russian locale.
 */
const ruLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}

export default ruLocale
