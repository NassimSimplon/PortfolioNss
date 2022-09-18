import React from 'react'
import './HomeSection.css'
import '../../App.css';
import {Constants} from '../../Utils/ImportFile'
import Nav from '../../Shared/Navbar/Nav'
 
const HomeSection = () => {
  
  return (
    <div id='Home'>
      <Nav />
    <div className='empty-space'>
    </div>
    <div className='description-section'>
    <div className='content'>
        <div className='description-content'>
        <span>Hello, I'm</span>
       <div className='row-1'>      <div></div>
          <div></div></div>
       <div className='text-content'>
     
       <h1>Nassim Khlifi</h1>
       <h2>Creative Developer</h2>
     <div>
     <button>Contact</button>
     </div>
       </div>
       <div className='row-2'>      <div></div>
          <div></div></div>
        </div>
        <h1>khlifi</h1>
      </div>
    </div>
    </div>
  )
}

export default HomeSection