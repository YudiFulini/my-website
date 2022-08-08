import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import KanjiComponent from './kanjiComponent.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import {getKanjiList, options} from './getKanjiList';

const kanjiPage = () => {

  const [kanjiList, setKanjiList] = useState([]);
  const [grade, setGrade] = useState(1);
  const [displayList, setDisplayList] = useState({
    kanji: 'block',
    furigana: 'block',
    english: 'block'
  });
  const [hideShow, setHideShow] = useState({
    kanji: 'Hide',
    furigana: 'Hide',
    english: 'Hide'
  })

  const toggleDisplay = (attribute) => {
    const display = displayList;
    const displayHideShow = hideShow;

    if(display[attribute] === 'block'){
      display[attribute] = 'none';
      displayHideShow[attribute] = 'Show'
    }else{
      display[attribute] = 'block';
      displayHideShow[attribute] = 'Hide'
    }

    setDisplayList({
      kanji: display.kanji,
      furigana: display.furigana,
      english: display.english,
    })
    setHideShow({
      kanji: displayHideShow.kanji,
      furigana: displayHideShow.furigana,
      english: displayHideShow.english,
    })
  }

  useEffect(() => {
    getKanjiList(options).then((response)=>{setKanjiList(response)}).catch(()=>{alert('Unexpected error. Please, try again')});
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
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('kanji')}>
            {hideShow.kanji + ' Kanji'}
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('furigana')}>
            {hideShow.furigana + ' Furigana'}
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={()=>toggleDisplay('english')}>
            {hideShow.english + ' English'}
          </Dropdown.Item>  
        </Dropdown.Menu>
      </Dropdown>
    </footer>
  </>
  )
}

export default kanjiPage;