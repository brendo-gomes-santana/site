import { useEffect } from 'react';
import './style-sobre.css';

import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Sobre(){
    useEffect(()=> {
        AOS.init({duration:800});
    },[])
    return(
        <section id="container-sobre" >
            <h1 data-aos='fade-up'>Sobre</h1>
            <article id='um-pouco'>
                <img src={require('./img/eu.jpg')} alt='eu' data-aos='fade-up'/>
                <p data-aos='fade-up'>
                    Olá, me chamo Brendo Gomes Santana, estou cursando na área da Ciência da computação, irei me formar em 2025.
                    <br/>
                    Sempre me interessei pela área da tecnologia, aos 15 anos já tinha bastante conhecimento na área, mas não sabia muito o que realmente gostaria de fazer, só quando entrei na faculdade que percebi que gostava de programar. 
                    <br/>
                    Comecei a me focar no desenvolvendo web, meu objetivo é ser dev fullstatek, mas pra isso acontecer ainda há uma grande jornada pela frente, começando pelo front-end e depois indo pro back-end.
                </p>
            </article>
            <article id='meu-cv' data-aos='fade-up'>
                <a href={require('./Curriculo.pdf')} download >Meu CV</a>
            </article>
        </section>
    );
}