import buildDistanceInWordsLocale from './buildDistanceInWordsLocale/index.js'
import buildFormatLocale from './buildFormatLocale/index.js'
import {getTranslation} from './translations/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Italian locale.
 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
 */
const itLocale = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale(),
  getTranslation: getTranslation
}

export default itLocale
