import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const kanjiComponent = (props)=>{
  let {id, character, onyomi, kunyomi, meaning, grade, examples, display} = props;
  
  let showKanji = true;
  if(display.kanji == 'none'){
    showKanji=false
  }else(
    showKanji=true
  )


  examples = examples.map(example=>{
    let [kanji,furigana] = example.japanese.split("（", 2);
    furigana=furigana.replace('）','')
    return{
      japanese: kanji,
      furigana: furigana,
      meaning: example.meaning.english
    }
  })

  return(
    <Row className="py-4 border-top border-bottom border-primary">
      <Col className="py-3" md={5}>
        <div className="d-flex flex-row">
          <p className="inline-block text-white m-0 ">Onyomi: </p>
          <p className="text-white m-0 mx-2" style={{display:display.furigana}}>{onyomi}</p>
        </div>

        <div className="d-flex flex-row">
          <p className="inline-block text-white m-0 ">Kunyomi: </p>
          <p className="text-white m-0 mx-2" style={{display:display.furigana}}>{kunyomi}</p>
        </div>
        {showKanji ? (
            <h1 className="text-white kanji-title py-3 m-0">{character}</h1>
          ):(
            <h1 className="text-white kanji-title py-3 m-0">?</h1>
          )}

        <div className="d-flex flex-row">
          <p className="inline-block text-white m-0 ">Meaning: </p>
          <p className="text-white m-0 mx-2" style={{display:display.english}}>{meaning}</p>
        </div>

        <p className="text-white m-0"> id: {id}</p>
      </Col>
      <Col className="py-1" md={7}>
        <Row className="">
          <h5 className="text-white text-end my-3">Examples</h5>
          {
            examples.map((example,i)=>{
              return(
                <Row className="align-items-center border-bottom border-primaryOpaque" key={i}>
                  <Col>
                    <p className="text-white text-center p-0 m-0 japanese-font" style={{display:display.kanji}}>{example.japanese}</p>
                  </Col>
                  <Col>
                    <p className="text-white text-center p-0 m-0 japanese-font" style={{display:display.furigana}}>{example.furigana}</p>
                  </Col>
                  <Col>
                    <p className="text-white text-center p-0 m-0" style={{display:display.english}}>{example.meaning}</p>
                  </Col>
                </Row>
              )
            })
          }
        </Row>
      </Col>
    </Row>
  )
}

export default kanjiComponent;