import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import {getTranslation} from './translations/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Danish locale.
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 */
const daLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}

export default daLocale
