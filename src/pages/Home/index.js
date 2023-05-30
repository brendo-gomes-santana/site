import img_eu from './img/eu.jpg';
import img_contato from './img/img_contato.jpg';

import './style-home.css';

import {useEffect, useState} from 'react';

import { IMaskInput } from "react-imask";
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom';

//pra funciocanar o efeito, tem que ter os dois.
import AOS from 'aos';
import 'aos/dist/aos.css'

import Arraytecnologia  from '../../componentes/Array/arrayTecnologia'

export default function Home(){

    const [qualTecnologia, setQualTecnologia] = useState(null)

    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(nome === '' || email === '' || mensagem === ''){
            toast.warn('Preenchar todos os campos')
            return;
        }

        const templateParamans = {
            from_name: nome,
            email: email,
            telefone: telefone,
            message: mensagem
        }

        emailjs.send("service_0ekaqpf", "template_mtjzt5l", templateParamans, "B0scmubYGpapyzKbO")
        .then((r)=>{
            toast.success('Mensagem enviada com sucesso!', r.status, r.text)
            setName('')
            setMensagem('')
            setTelefone('')
            setEmail('')
        
        }, (err)=>{
            toast.warn('mensagem não enviada!')
        })

    }

    useEffect (() =>{
        AOS.init({duration:800});
    },[])

    return(
        <main className='container'>
            <article id='eu' data-aos='fade-up'>
                <section>
                    <h3>Web</h3>
                    <h1>Desenvolvedor</h1>
                    <p>Sou Desenvolvedor focado no desenvolvimento Web. Acredito no poder <br/>da tecnologia de transformar o mundo.</p>
                    <Link to='/sobre'>Mais</Link>
                </section>
                <img src={img_eu} alt='brendo Gomes Santana'/>
            </article>

            <article id='ferramentas' data-aos='fade-up'>
                <p>Linguagens que utilizo</p>
                <section id='box-img'>
                    <div className='modelboxtecnologia'>
                        {qualTecnologia === 1 ? <button onClick={()=> setQualTecnologia(null)}>Frontend</button> : 
                        <button onClick={()=> setQualTecnologia(1)}>Frontend</button>}
                        {qualTecnologia === 1 && (
                            <>
                            <div className='tecnologialist'>
                                {Arraytecnologia.frontend.map((tec)=> {
                                    return(
                                        <>
                                        <a href={tec.link} key={tec.nome} data-aos='fade-up'>
                                            <img src={tec.urlImg} alt={tec.nome} />
                                        </a>
                                        <span data-aos='fade-up'>{tec.nome}</span>
                                        </>      
                                    )
                                })}
                            </div>
                            </>
                        )}
                    </div>
                    <div className='modelboxtecnologia'>
                        
                    {qualTecnologia === 2 ? <button onClick={()=> setQualTecnologia(null)}>Backend</button> : 
                        <button onClick={()=> setQualTecnologia(2)}>Backend</button>}
                        {qualTecnologia === 2 && (
                            <>
                            <div className='tecnologialist'>
                                {Arraytecnologia.backend.map((tec)=> {
                                    return(
                                        <>
                                        <a href={tec.link} key={tec.nome} data-aos='fade-up'>
                                            <img src={tec.urlImg} alt={tec.nome} />
                                        </a>
                                        <span data-aos='fade-up'>{tec.nome}</span>
                                        </>      
                                    )
                                })}
                            </div>
                            </>
                        )}
                    </div>

                    <div className='modelboxtecnologia'>
                    {qualTecnologia === 3 ? <button onClick={()=> setQualTecnologia(null)}>Data Base</button> : 
                        <button onClick={()=> setQualTecnologia(3)}>Data Base</button>}
                    {qualTecnologia === 3 && (
                            <>
                            <div className='tecnologialist'>
                                {Arraytecnologia.DB.map((tec)=> {
                                    return(
                                        <>
                                        <a href={tec.link} key={tec.nome} data-aos='fade-up'>
                                            <img src={tec.urlImg} alt={tec.nome} />
                                        </a>
                                        <span data-aos='fade-up'>{tec.nome}</span>
                                        </>      
                                    )
                                })}
                            </div>
                            </>
                        )}
                    </div>
                </section>
            </article>

            <article id='contato' >
                <img src={img_contato} alt='contato'data-aos='fade-right'/>
                <form className='form' onSubmit={sendEmail} data-aos='fade-left' >
                <p>Entre em Contato</p>
                    <label>Nome</label>
                    <input type='text' 
                    placeholder='Digite seu nome' 
                    onChange={(e)=> setName(e.target.value)}
                    value={nome}/>

                    <label>Telefone</label>
                    <IMaskInput mask='(00) 0 0000-0000'  
                    placeholder='Digite o número de telefone'
                    onChange={(e)=> setTelefone(e.target.value)}
                    value={telefone}/>

                    <label>E-mail</label>
                    <input type='email' 
                    placeholder='Digite seu e-mail' 
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}/>

                    <label>O que gostaria?</label>
                    <textarea id='msg' 
                    onChange={(e)=> setMensagem(e.target.value)}
                    value={mensagem}/>

                    <input className='Enviar' type='submit' value='Enviar'/>
                </form>
            </article>
        </main>
    );
}