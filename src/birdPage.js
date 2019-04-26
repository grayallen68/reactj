import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel as Carousel} from 'react-responsive-carousel';
import './birdPage.css';
import birds from './resources/birds.js';
//import './info.css';

function birdPage({match}){
  const bird = birds.find(({name}) => name === match.params.birdname)

  return (
    <div className="birdPage">
      
        <div className="birdInfoContainer">
        <div className="titleCon">
      <h2>{bird.displayName}</h2>
      </div>
      <div className="pads">
      <Carousel showThumbs={false} showArrows={true}>
                {bird.images.map((image) => 
                <div key={bird.images.indexOf({image})}>
                    <img className="carouselImage" src={image}/>
                </div>)
                }
            </Carousel>
            </div>
      <div className="infoCon">
      <p>{bird.description}</p>
      <a className="home" href="/">Back to Home</a>
      </div>

    </div>
    </div>
  )
}


export default birdPage;