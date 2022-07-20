import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import KanjiComponent from './kanjiComponent.jsx';
import Dropdown from 'react-bootstrap/Dropdown';


const optionsKanjiList = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '242ab8eed2msh0adce211ac683fep1368a9jsne38135a9bd8a',
		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};


const kanjiPage = () => {
  const kanjisElementary = [];
  const [kanjiList, setKanjiList] = useState([]);
  const [grade, setGrade] = useState(0);

  const searchKanjis =  () => {
    fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', optionsKanjiList)
    .then(response => response.json())
    .then(response => {
      if(kanjisElementary.length>0)
        kanjisElementary.splice(0, kanjisElementary.length)

      response.forEach((letter) => kanjisElementary.push(
        {
          character: letter.kanji.character,
          onyomi: letter.kanji.onyomi.katakana,
          kunyomi: letter.kanji.kunyomi.hiragana,
          meaning: letter.kanji.meaning.english,
          grade: letter.references.grade,
          examples: letter.examples
        }
      ))
    }).then(()=>{
      console.log(kanjisElementary);
      setKanjiList(kanjisElementary);
      console.log(kanjiList);
    })
    .catch(err => console.error(err));
  }


  useEffect(() => {
    searchKanjis();
    setGrade(1);
  },[]);

  return(
  <>
  <Container fluid='xxl'>
      {kanjiList.length > 0 ? (
          <div className="kanji-components">
            {
              kanjiList.map((kanji,i) => {
                if (kanji.grade === grade)
                return (
                  <KanjiComponent key={i} character={kanji.character} onyomi={kanji.onyomi}
                    kunyomi={kanji.kunyomi} meaning={kanji.meaning} grade={kanji.grades} 
                    examples={kanji=kanji.examples}/>
                )
              })
            }
          </div>
        ) : (
          <div className="empty">
            <h2 className="text-white p-3">loading...</h2>
          </div>
        )
      }
    </Container>
    <div className="fixed-bottom d-flex justify-content-center py-2 bg-dark text-lightground align-items-center">
    <Dropdown className="px-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Grade
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" onClick={()=>setGrade(1)}>Grade 1</Dropdown.Item>
        <Dropdown.Item as="button" onClick={()=>setGrade(2)}>Grade 2</Dropdown.Item>
        <Dropdown.Item as="button" onClick={()=>setGrade(3)}>Grade 3</Dropdown.Item>
        <Dropdown.Item as="button" onClick={()=>setGrade(4)}>Grade 4</Dropdown.Item>
        <Dropdown.Item as="button" onClick={()=>setGrade(5)}>Grade 5</Dropdown.Item>
        <Dropdown.Item as="button" onClick={()=>setGrade(6)}>Grade 6</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
      Grade {grade} Kanji
    </div>
  </>
    
    
  )
}

export default kanjiPage;