import { useState, useEffect } from "react";




export default function Accordion({ title, content }) {
  const [isActive, setActive] = useState(true);
  const HandleActive = () => {
    setActive(!isActive)
  }

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className='accordion__top'>
        <h2>{title}</h2>
        <div className={`accordion__button ${isActive ? 'active' : ''}`} onClick={() => HandleActive()}>
          <div className='accordion__bar'>
          </div>
          <div className='accordion__bar'>
          </div>

        </div>
      </div>
      {isActive && <div className='accordion__content'> <p>{content}</p></div>}

    </div>
  )
}
