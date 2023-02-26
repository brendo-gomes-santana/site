import './style-sobre.css';
import Modal from '../../componentes/Modal/index';

import {useState} from 'react';

export default function Sobre(){
    const [openModal, setOpenModal] = useState(false);

    return(
        <main className="container-sobre">
            <h1>Sobre</h1>
            <hr/>
            <article id='um-pouco'>
                <img></img>
                <p>
                    Olá, me chamo Brendo Gomes Santana, estou cursando na área da Ciência da computação, irei me formar em 2025.
                    <br/>
                    Sempre me interessei pela área da tecnologia, aos 15 anos já tinha bastante conhecimento na área, mas não sabia muito o que realmente gostaria de fazer, só quando entrei na faculdade que percebi que gostava de programar. 
                    <br/>
                    Comecei a me focar no desenvolvendo web, meu objetivo é ser dev fullstatek, mas pra isso acontecer ainda há uma grande jornada pela frente, começando pelo front-end e depois indo pro back-end.
                </p>
            </article>
            <article id='cursos-feitos'>
                <h2>Formação</h2>
                <hr/>
                <div className='box-modal'>
                    <button onClick={()=>{setOpenModal(true)}}>abrir modal</button>
                    <Modal isOpen={openModal}>
                    
                    </Modal>
                </div>
            </article>
            <article id='experiencia-profissional'>
                
            </article>
        </main>
    );
}