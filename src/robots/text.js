// const algorithmia = require('algorithmia')
import config from './../config'

export async function robotText (content) {
  let result = await fetchContentFromWikipedia(content.search)
  return result
}

async function fetchContentFromWikipedia (text) {
  let input = {
    'articleName': text,
    'lang': 'pt'
  }

  // eslint-disable-next-line no-undef
  const al = Algorithmia.client(config.keyAlgorithmia)
  const wikiReq = al.algo('web/WikipediaParser/0.1.2?timeout=300') // timeout is optional
  return wikiReq.pipe(input)
}

export default robotText
