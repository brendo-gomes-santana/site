import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react';


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
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Meus Projetos</a>
                <a href="#">Contato</a>
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