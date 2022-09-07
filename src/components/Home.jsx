import React,{useRef,useEffect, useState} from 'react'
import { gsap, Power3 } from 'gsap'
import Content from './Content'
import Images from './Images';

const Home = () => {  
  let tl= new gsap.timeline();
  // let ease= Power3.easeOut();

  return (
    <div className='Home' >
      <div className="contentbox">
        <Content timeline={tl} />
        <Images />
      </div>
    </div>
  )
}

export default Home