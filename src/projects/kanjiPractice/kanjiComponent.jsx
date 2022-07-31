import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const kanjiComponent = (props)=>{
  let {id, character, onyomi, kunyomi, meaning, grade, examples, display} = props;

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
        <p className="text-white m-0" style={{display:display.furigana}}>Onyomi: {onyomi}</p>
        <p className="text-white m-0" style={{display:display.furigana}}>Kunyomi: {kunyomi}</p>
        <h1 className="text-white kanji-title py-3 m-0" style={{display:display.kanji}}>{character}</h1>
        <p className="text-white m-0" style={{display:display.english}}> Meaning: {meaning}</p>
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