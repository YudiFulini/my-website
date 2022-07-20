import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { type } from "@testing-library/user-event/dist/type";

const kanjiComponent = (props)=>{
  let {character, onyomi, kunyomi, meaning, grade, examples} = props;

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
    <Row className="py-4 border-top border-bottom">
      <Col className="py-3" md={5}>
        <p className="text-white m-0">Onyomi: {onyomi}</p>
        <p className="text-white m-0">Kunyomi: {kunyomi}</p>
        <h1 className="text-white kanji-title py-2 m-0">{character}</h1>
        <p className="text-white m-0"> Meaning: {meaning}</p>
      </Col>
      <Col className="py-1" md={7}>
        <Row className="">
          <h5 className="text-white text-end my-3">Examples</h5>
          {
            examples.map((example,i)=>{
              return(
                <Row key={i}>
                  <Col>
                    <p className="text-white text-center p-0 m-0">{example.japanese}</p>
                  </Col>
                  <Col>
                    <p className="text-white text-center p-0 m-0">{example.furigana}</p>
                  </Col>
                  <Col>
                    <p className="text-white text-center p-0 m-0">{example.meaning}</p>
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