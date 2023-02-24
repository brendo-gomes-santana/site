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
                <a href="/">Home</a>
                <a href="/sobre">Sobre</a>
                <a href="/meus-projetos">Meus Projetos</a>
                <a href="#contato">Contato</a>
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