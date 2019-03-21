// const algorithmia = require('algorithmia')
import config from './../config'
import sbd from 'sbd'

export async function robotText (content) {
  let result = {}

  result = await fetchContentFromWikipedia(content.search)

  result.serializer = await serializerContent(result)

  result.serializer = await removeMakdown(result.serializer)

  result.serializer = await sentenceIn(result.serializer)

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

async function serializerContent (content = null) {
  let blanckLine = await removeBlanckLine(content.result.content)
  return blanckLine
}

async function removeBlanckLine (content) {
  let allLines = content.split('\n')
  let linesBlanck = allLines.filter((line) => {
    if (line.trim().length === 0) {
      return false
    } else {
      return true
    }
  })

  return linesBlanck
}

async function removeMakdown (content) {
  let result = content.filter((item) => {
    if (item.trim().startsWith('=')) {
      return false
    } else {
      return true
    }
  })

  return result.join(' ')
}

async function sentenceIn (content) {
  let result = []
  let sentences = sbd.sentences(content)
  sentences.map((item) => {
    result.push({
      text: item,
      keywords: [],
      imagens: []
    })
  })
  console.log(result)

  return result
}

export default robotText
