import { useState, useEffect } from "react";

import { Container, Slides } from "./styled"
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiSettings } from 'react-icons/fi';
import { Swiper } from 'swiper/react';
import { ferramentas } from "../../data";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function Ferramentas() {
    const [rendimensionar, setRendimensionar] = useState(false);
    useEffect(()=> {
        (() =>{
            const tamanho = window.innerWidth;
            if(tamanho <= 700){
                return setRendimensionar(true)
            } 
            setRendimensionar(false);
        })()
    },[])

    return (
        <Container>
            <h2><FiSettings/> Ferramentas que Utilozo</h2>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={rendimensionar? 3 : 6}
                autoplay={{delay: 1500}}
                pagination={{clickable: true}}
                scrollbar={{draggable: false}}
                
                navigation
            >
                {ferramentas.map((ferramenta) => {
                    return (
                        <Slides key={ferramenta.id}>
                            <a href="####">
                                <img src={ferramenta.url} />
                                <p>{ferramenta.nome}</p>
                            </a>
                        </Slides>

                    )
                })}
            </Swiper>
            <p>Altuamente trabalho com backend, frontend e mobile</p>
        </Container>
    )
}
