const algorithmia = require('algorithmia')

export function robotText (content) {
  console.log(`Recebi com sucesso o conteudo: ${content.search}`)
  return fetchContentFromWikipedia(content.search)
}

async function fetchContentFromWikipedia (text) {
  const algorithmiaAuth = algorithmia('simEjKiHrL8L8eWvk0h6qClOCHg1')
  console.log(algorithmiaAuth)
  const wikipediaAlgorithm = algorithmiaAuth.algo('web/WikipediaParser')
  const wikipediaResponse = await wikipediaAlgorithm.pipe(text)
  const wikipediaContent = wikipediaResponse.get()
  console.log(wikipediaContent)
  return wikipediaContent
}

export default robotText
