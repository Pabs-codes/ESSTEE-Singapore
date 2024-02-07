import React from 'react'
import whatsapplogo from '../../Assets/WAicon.png';
import hellow from '../../Assets/hellow.png';
import './Whatsapp2.css';


const Whatsapp = () => {
  return (
    <div className='waicon-container' style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '6', display: 'flex', alignItems: 'center' }}>
    <div className='waicon'>
      <a href='https://wa.me/+94777751550?text=Hello, can I send you an inquiry?' target="_mblank">
        <img src={whatsapplogo} width="60" alt='wa' />
      </a>
    </div>
    <div className='help-text'>
    <img src={hellow} width="60" alt='wa' />
    </div>
  </div>
  )
}

export default Whatsapp