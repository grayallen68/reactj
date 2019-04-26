import React, { Component } from 'react';
import Nav from './navBar';
//import './info.css';

function birdPage(){
  return (
    <div className="birdPage">
      <Nav/>
        <div className="birdInfoContainer">
        <div className="titleCon">
      <h2>Birdguide</h2>
      <div className="infoCon">
      <strong>-- as of the current demo, the tool can classify between 5 birds: 1. Great Egret 2. Harpy Eagle 3. Jabiru Stork 4. Scarlet Macaw 5. Keel-billed Toucan. Upload any picture of either of the birds you've taken or downloaded and have fun identifying --</strong>
      <p>Welcome! This is a demo Artificial Intelligence startup for a company called birdguide. The purpose of this project is to demonstrate the potential impact that A.I. can have regarding conservation efforts. Our world is currently in a state in which it is imperative that conservation is supported from every angle manageable. This demo of Birdguide aims to give a glimpse of how a fully developed version may help improve conservation as well as the worlds of business and education. 
      </p>
      <p>
      The Birdguide identifier is a tool that can classify different species of birds from user-uploaded images and give information on the identified bird. The informative nature of this tool is what can give a boost to conservation. When a curious user uploads an image of a bird they met on a trail, he/she may be presented with unknown information about how their actions affect that certain type of bird. For example, driving loud motor vehicles in macaw habitats scare them away from their nesting areas. In future versions of Birdguide, similar information may be presented to the user in the form of notifications on their mobile devices; regularly reminding them of the best practices to perform that assist the wellbeing of the birds their actions effect on. 
      </p>
      <p>
      Going on a journey into nature, talking pictures of the most interesting birds you see, and getting to read about their habitats after identifying them sounds like a very interactive learning experience. The kind of learning experience to which students respond best. The use of Birdguide to education students on birds will ensure information retention by utilizing their instinct to explore as well as analytical skills. Future versions can include another type of AI model that can give feedback on the learning rates of individuals along with what style of teaching they respond best to. This feedback can assist the instructor in adjusting teaching methods to suit different students. 
      </p>
      <p>
      Education is always an area heavily invested in because of the impact the knowledge of citizens has on a region. This creates the perfect environment for an application such as Birdguide to thrive as a paid service. It is possible for Birdguide to potentially become an education and tourism platform. Where instructors can sign up to market their classes to users, and tour guides can sign up to market their expeditions to tourists. 
      </p>
      <a className="home" href="/">Back to Home</a>
      </div>
    
    </div>
    </div>
    </div>
  )
}

export default birdPage;
