
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import "../../styles/global.scss"
import React from 'react'
import img from '../../public/img/logo.png'
import handPhone from '../../public/img/workplace-mobile-app-hands.jpg'
import WebClient from '../../public/img/webClient.jpg'
import seoPhoto from '../../public/img/seo.jpeg'
import { useRouter } from "next/router";
import franceFlag from "../../public/img/france.png"
import London from "../../public/img/united-kingdom-flag.png"
export default function Nav() {
  const [submenuOpen, setOpenSubmenus] = useState({
    services: false,
    UseCase: false
  })
  const { locale, locales, push, pathname } = useRouter();

  const switchLanguage = (lang) => {
    push(pathname, pathname, { locale: lang });
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleSubmenu = (menu) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu], // Basculer l'état du sous-menu sélectionné
    }));
  };
  return (
    <div className={`nav ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='nav__logo'>
        <Image src={img} width={219} height={36} alt='imagr' />
      </div>

      <div className='nav__menu'>
        <ul className='nav__bar'>
          <li> <a href='#'>About us</a></li>
          <li><a href='#' onClick={() => toggleSubmenu('services')}>Service</a>
            {submenuOpen.services && (
              <ul className='nav__sub-menu'>
                <li>
                  <Image width={250} src={WebClient} />

                  <a>Web developpement</a></li>
                <li>
                  <Image width={250} src={handPhone} />


                  <a>Mobile developpement</a></li>
                <li>
                  <Image width={250} src={seoPhoto}/>

                  
                  <a> SEO </a>
                </li>

              </ul>)}
          </li>
          <li><a href='#'>Use Cases</a></li>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>Blog</a></li>
          <li><Link href='/equipe'> Equipe </Link> </li>
        </ul>

        <div className="nav__lang">
        {/* <p>{locale === 'fr' ? 'Bienvenue' : 'Welcome'}</p> */}
        <Image onClick={() => switchLanguage('en')} src={London}/>
        <Image onClick={() => switchLanguage('fr')} src={franceFlag}/>
      </div>
      </div>

    </div>
  )
}
