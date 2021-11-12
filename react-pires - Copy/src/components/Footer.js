import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>

        Perumahan Budi Agung 
        Jl. Jati Blok E No.18, RT.04/RW.04,Sukadamai
      
        Kec. Tanah Sereal, Kota Bogor
        Jawa Barat 16165

        </p>
     
      </section>
      <div class='footer-links'> 
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PIRES
              <img src="images/LogoPiarea.svg" alt="" />
            </Link>
          </div>
          <small class='website-rights'>https://piarea.co.id/
</small>
          <div class='social-icons'>
       
            <Link
              class='social-icon-link instagram'
             
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link whatsapp'
              
              target='_blank'
              aria-label='Whatsapp'
            >
               <i class='fab fa-whatsapp' />
            </Link>
           
            <Link
              class='social-icon-link linkedIn'
              
              target='_blank'
              aria-label='LinkedIn'
            >
               <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
