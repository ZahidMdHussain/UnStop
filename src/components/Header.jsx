import React from 'react'
import menu from '../image/menu.png'
import laptop from '../image/laptop.png'
import bar from '../image/bar.png'
import signal from '../image/signal.png'
import battery from '../image/battery.png'
import '../App.css'

const Header = () => {
  return (
    <>
    <MobStatus />
    <div className="header">
    <div className='left-header'>
        <div className='menu-bg'>
        <img src={menu} alt="hamburger-icon" /></div>
        <h2>Assessment</h2>
    </div>
    <div className='right-header'>
   <img src={laptop} alt="laptop-icon" />
    </div>
</div>
</>
  )
}

const MobStatus = () => {
    return (
        <div className='status'>
            <h5>{new Date().getHours()}:{new Date().getMinutes()}</h5>
            <div className="mob-info">
                <img src={bar} alt="network signal" />
                <img src={signal} alt="wifi connection" />
                <img src={battery} alt="phone battery status" />
            </div>
        </div>
    )
}

export default Header