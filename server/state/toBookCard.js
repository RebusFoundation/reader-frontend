// @flow
/*::
import type {Icon, Publication} from './types.js.flow'
*/
const { getCover } = require('./getCover.js')
const { getImage } = require('./getImage.js')
const { arrify } = require('../utils/arrify.js')
/**
 * Converts an ActivityStreams publication type into an easier to handle BookCard state object.
 */
function toBookCard (
  publication /*: Publication */
) /*: { id: string, name: string, cover: Icon } */ {
  const icons = arrify(publication.icon)
  const placeholdercover = {
    type: 'Image',
    summary: '',
    width: 250,
    height: 350,
    url: '/static/placeholder-cover.png'
  }
  let cover
  if (publication['schema:image']) {
    // The publication has an explicitly set cover using schema.org, so let's use that
    // Also let's just assume that this will be an ActivityStreams Image type
    cover = getImage(publication['schema:image'], placeholdercover)
  } else {
    // No specific cover so we need to pick whichever icon works the best.
    cover = icons.reduce(getCover, placeholdercover)
  }
  return {
    id: publication.id,
    name: publication.name || '',
    cover
  }
}

module.exports.toBookCard = toBookCard
