// const algorithmia = require('algorithmia')

export async function robotText (content) {
  let result = await fetchContentFromWikipedia(content.search)
  console.log(`Recebi com sucesso o conteudo: ${content.search}`)
  console.log('voltou: ', result)

  return result
}

async function fetchContentFromWikipedia (text) {
  let result = []
  let input = {
    'articleName': text,
    'lang': 'pt'
  }

  // eslint-disable-next-line no-undef
  const al = Algorithmia.client('simEjKiHrL8L8eWvk0h6qClOCHg1')
  const wikiReq = al.algo('web/WikipediaParser/0.1.2?timeout=300') // timeout is optional
  await wikiReq.pipe(input).then(function async (output) {
    result = output
  })
  return result
}

export default robotText
