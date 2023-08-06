import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import KanjiComponent from './kanjiComponent.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import Kanjis from './myKanjiList.json';


//import {getKanjiList} from './getKanjiList';
//import {getKanjis} from './getKanjis.js';

const KanjiPage = () => {

  const [kanjiList, setKanjiList] = useState([]);
  const [jlpt, setJLPT] = useState(1);
  const [displayList, setDisplayList] = useState({
    kanji: 'block',
    furigana: 'block',
    english: 'block',
    showHide: {kanji: 'Hide', furigana: 'Hide', english: 'Hide'}
  });

  const toggleDisplay = (attribute) => {
    const display = displayList;

    if(display[attribute] === 'block'){
      display[attribute] = 'none';
      display.showHide[attribute] = 'Show'
    }else{
      display[attribute] = 'block';
      display.showHide[attribute] = 'Hide'
    }
    setDisplayList((prev)=>{ return{...prev, display}})
  }

  useEffect(() => {
    //getKanjis().then((response)=>{setKanjiList(response)}).catch(()=>{alert('Unexpected error. Please, try again')});
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/KanjiDB/myKanjiList.json');
    //     const kanjis = await response.json();

    //     console.log(kanjis)

    //     setKanjiList(kanjis);
    //   } catch (error) {
    //     console.error('Error loading JSON file:', error);
    //   }
    // };
    // fetchData();
    console.log(Kanjis)
    setKanjiList(Kanjis);
    setJLPT(5)
    

  },[]);

  return (
    <>
      <Container fluid='xxl'>
        {kanjiList.length > 0 ? (
          <div className="kanji-components">
            {
              kanjiList.filter(kanji => kanji.jlpt === jlpt).map((kanji,i)=>{
                const id = i+1
                return (
                  <KanjiComponent key={i} id={kanji.jlpt+'.'+id} character={kanji.kanji} onyomi={kanji.onyomi}
                    kunyomi={kanji.kunyomi} meaning={kanji.meanings} grade={kanji.jlpt} 
                    examples={kanji=kanji.examples} display={displayList}/>
                )
              })
            }
          </div>
        ) : (
          <div className="py-3 my-3">
            <h2 className="font-8bit-title text-center text-white p-3">loading...</h2>
          </div>
        )}
      </Container>

      <footer className="fixed-bottom d-flex justify-content-around py-2 bg-dark align-items-center">
        <Dropdown className="px-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            JLPT
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={() => setJLPT(1)}>1</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setJLPT(2)}>2</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setJLPT(3)}>3</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setJLPT(4)}>4</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setJLPT(5)}>5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span className="text-lightground">
          Grade {jlpt}
        </span>

        <Dropdown className="px-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Display
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={() => toggleDisplay('kanji')}>
              {displayList.showHide.kanji + ' Kanji'}
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => toggleDisplay('furigana')}>
              {displayList.showHide.furigana + ' Furigana'}
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => toggleDisplay('english')}>
              {displayList.showHide.english + ' English'}
            </Dropdown.Item>  
          </Dropdown.Menu>
        </Dropdown>
      </footer>
    </>
  )
}

export default KanjiPage;
