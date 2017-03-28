import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import {getTranslation} from './translations/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Swedish locale.
 * @author Johannes Ulén [@ejulen]{@link https://github.com/ejulen}
 */
const svLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}

export default svLocale
