import React from "react";
import Container from 'react-bootstrap/Container';
import HobbieItem from './hobbieItem.jsx';

//hobbies: Anime, Games, learning Web Dev, Taking Photos, Travelling, Snowboarding.
import AnimeImg from './hobbiesImg/anime-img.jpg';
import GameImg from './hobbiesImg/game-img.jpg';
import WebDevImg from './hobbiesImg/webdev-img.jpg';
import PhotoImg from './hobbiesImg/photo-img.jpg';
import TravelImg from './hobbiesImg/travel-img.jpeg';

//hobbie descriptions:
const animeDescription = `I love watching animes!
I love all genders, but comedy and slice of life animes have a special place in my heart.
My favorite one is Saiki Kusuo! Yare Yare..`;
const gameDescription = `Playing games is one of my oldest hobbies.
I have been playing since I was a little child. I used to play a lot of Pokemon, but nowadays 
my favorite one is Super Smash Ultimate, where I play as Joker from Persona 5.`;
const webdevDescription = `Learning web development is one of my newest hobbies. 
I have started studying it out of curiosity and I felt each time more invested in it. 
I hope to slowly get better and better and work for a web-related company in the future.`;
const photoDescription = `When I came to Japan for the first time after becoming adult, 
I have discovered the hobby of taking photos. Specially in a county as aesthetic as Japan!
I love taking every kind of photos, but my favorite is the night view kind of photo.`;
const travelDescription = `I love traveling and visiting different kind of places! 
Until now I only got to travel around Brazil and Japan, but slowly I want to visit every kind of places!`;

const hobbiesContainer = ()=>{
  return(
    <Container className="p-3">
      <h2 className="text-center text-white">Hobbies</h2>
      <HobbieItem hobbieTitle="Take photos" hobbieDescription={photoDescription} hobbiePhoto={PhotoImg}/>
      <HobbieItem hobbieTitle="Travel" hobbieDescription={travelDescription} hobbiePhoto={TravelImg}/>
      <HobbieItem hobbieTitle="Anime" hobbieDescription={animeDescription} hobbiePhoto={AnimeImg}/>
      <HobbieItem hobbieTitle="Games" hobbieDescription={gameDescription} hobbiePhoto={GameImg}/>
      <HobbieItem hobbieTitle="Learn Web Dev" hobbieDescription={webdevDescription} hobbiePhoto={WebDevImg}/>
      
    </Container>
  );
}

export default hobbiesContainer;