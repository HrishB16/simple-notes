import React,{useRef, useEffect} from 'react'
import './Content.css'
import { Link } from "react-router-dom";

function Content({timeline}) {

  let h1= useRef(null);
  let ptext= useRef(null);
  let btn= useRef(null);

  useEffect(() => {
    timeline.from([h1.children,ptext,btn], 1,{
      opacity: 0,
      y:"100",
      skewY: 10,
      stagger: {
        amount: .7
      }
    })
    .to([h1.children,ptext,btn], 2,{
      opacity:1,
      skewY:0,
      y:0
    },"-=1")
  })
  

  return (
    <div>
        <div className="content">
            <h1 className="content-inner-bold" ref={el=>h1 = el}>
                <div>My TodoList- Your online list maker on the go</div>
                <br />
                <div>Helps you  maintain notes on the cloud</div>
            </h1>
            <p ref={el =>ptext= el}>Make colorful notes , save them or you can update them and resave.Work's completed? Mark them as done just by clicking on them or just delete them!</p>
            <button ref={el =>btn= el}>
            <Link className="navlink" to="/lists">Get Started  </Link>
            </button>
        </div>
    </div>
  )
}

export default Content