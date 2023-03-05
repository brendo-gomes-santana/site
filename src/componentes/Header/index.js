import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react';

import {Link} from 'react-router-dom';

import './style-header.css';
import logo from './logo.png';

export default function Header({acao}){

    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle('resposive_nav')
    }

    return(
        <header className={acao ? 'Aticarcor' : ''}>
            <img src={logo} alt='brendo gomes'/>
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <a target='_blank' href="https://github.com/brendo-gomes-santana">Meus Projetos</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}