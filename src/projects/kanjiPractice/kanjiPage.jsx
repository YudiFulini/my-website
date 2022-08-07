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
  const [grade, setGrade] = useState(1);
  const [displayList, setDisplayList] = useState({
    kanji: 'block',
    furigana: 'block',
    english: 'block'
  });

  const toggleDisplay = (attribute) => {
    const display = displayList;
    if(display[attribute] === 'block'){
      display[attribute] = 'none';
    }else{
      display[attribute] = 'block';
    }
    console.log(display)
    setDisplayList({
      kanji: display.kanji,
      furigana: display.furigana,
      english: display.english,
    })
  }
  
  const searchKanjis = () => {
    fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', optionsKanjiList)
    .then(response => response.json())
    .then(response => {
      //clean kanjiElementary array
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
    })
    .catch(err => console.error(err));
  }


  useEffect(() => {
    searchKanjis();
  },[]);

  return(
  <>
  <Container fluid='xxl'>
      {kanjiList.length > 0 ? (
          <div className="kanji-components">
            {
              kanjiList.filter(kanji => kanji.grade === grade).map((kanji,i)=>{
                const id = i+1
                return (
                  <KanjiComponent key={i} id={kanji.grade+'.'+id} character={kanji.character} onyomi={kanji.onyomi}
                    kunyomi={kanji.kunyomi} meaning={kanji.meaning} grade={kanji.grades} 
                    examples={kanji=kanji.examples} display={displayList}/>
                )
              })
            }
          </div>
        ) : (
          <div className="py-3 my-3">
            <h2 className="font-8bit-title text-center text-white p-3">loading...</h2>
          </div>
        )
      }
    </Container>


    <footer className="fixed-bottom d-flex justify-content-around py-2 bg-dark align-items-center">
      <Dropdown className="px-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Grade
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

      <span className="text-lightground">
        Grade {grade}
      </span>

      <Dropdown className="px-3">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Display
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('kanji')}
          >Kanji</Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('furigana')}
          >Furigana</Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('english')}
          >English</Dropdown.Item>  
        </Dropdown.Menu>
      </Dropdown>
    </footer>
  </>
    
    
  )
}

export default kanjiPage;