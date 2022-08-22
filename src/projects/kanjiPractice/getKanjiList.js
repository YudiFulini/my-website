const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '242ab8eed2msh0adce211ac683fep1368a9jsne38135a9bd8a',
    'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
  }
};

const getKanjiList = () => {

  const getKanjiApi = fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', options)
  .then(response => response.json())
  .then(response => {
    const kanjis = [];

    //clean kanjiElementary array
    if(kanjis.length>0)
      kanjis.splice(0, kanjis.length)
    response.forEach((letter) => kanjis.push({
      character: letter.kanji.character,
      onyomi: letter.kanji.onyomi.katakana,
      kunyomi: letter.kanji.kunyomi.hiragana,
      meaning: letter.kanji.meaning.english,
      grade: letter.references.grade,
      examples: letter.examples
    }))
    return response=kanjis
  })
  /*
  .catch(err => {
    console.error(err);
  })*/

  return getKanjiApi
}

export {getKanjiList};