import img_eu from './eu.jpg';
import img_front from './front-end.png';
import img_back from './back-end.png';
import img_contato from './img_contato.jpg'

import './style-home.css';

import {useState} from 'react';

import { IMaskInput } from "react-imask";
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

export default function Home(){

    const [nome, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(nome === '' || email === '' || telefone === '' || mensagem === ''){
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
    return(
        <main className='container'>
            <article id='eu'>
                <section>
                    <h3>Web</h3>
                    <h1>Desenvolvedor</h1>
                    <p>Sou Desenvolvedor focado no desenvolvimento Web. Acredito no poder <br/>da tecnologia de transformar o mundo.</p>
                    <a href='#'>Mais</a>
                </section>
                <img src={img_eu} alt='brendo Gomes Santana'/>
            </article>

            <article id='servico'>
            <h2>Meus Servições</h2>
                <section className='container-servico'>
                    <div className='box'>
                        <p className='titulo'>Dev Front-end</p>
                        <img src={img_front} alt='front-end'/>
                        <p className='conteudo'>Tenho experiencia no front-end, semantica do html, resposividade do css.</p>
                    </div>

                    <div className='box'>
                        <p className='titulo'>Dev Back-end</p>
                        <img src={img_back} alt='back-end'/>
                        <p className='conteudo'>Estou ganhando experiencia com o back-end, mas já conheço bastante coisa.</p>
                    </div>
                </section>
            </article>

            <article id='ferramentas'>
                <p>Linguagens que utilizo</p>
                <section className='box-img'>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVBJREFUSEvtl+FNw0AMhb9OAEwATABMAEwATAAjwATABKzACDABsEGZANgAJgB90lk6Tml6anJqf8RSFNVJ/Pze+XzujDXZbE24bBzwHrA7khpfwGcZq4vxE3A2EmiEMeZFHrMElunHyKARbj9nXgKfAC+NgE+B14g9AU9Sj1lnU3H9U3NRcd33aG7TuQR+gEfALhV2CDykHytJ3XeYRLJHwLwjwd8hwNFx3oHrFEifQbcTWxPQ9B8D34n91RDgIPIGBEAw8Vnul/VBB/OVpF4GLDsPAe+aLO+Ko7UJsGAyvckPggR+21LqXFnX2ASi0EL6JozdSlsZupLvFMXWBNjick0tPPduvp8dexyjmgFHteeym0zVGi8bfZQw1q4E0i8777L2Ml5Y7+jjSy2GvWfgPJdiUSs00zzbjn5Q7VKFqvG2OuKQFzfun8QQMlXf/gEMOGYfzp4aoAAAAABJRU5ErkJggg=="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAulJREFUSEvFljvPTVEQhp8vCjq+TodfgFbh0klEXAqJxqVS+vgDaCWCiEIhqCQKJKJ2+wHoCXoJEj9AHllzMuasvc+JXZyVnOx91mXemXnfmbXXWNFYWxEui4C3AbuBX8CH4uROYEeb+wgcAPa0/+59A/wcCmwI+BzgTwNx+GB7fw/sLY7oxGvgO7C9Pd2vI1fb2j8+9IBvAc8BjZ1NuzUcURxPETqvg8+Ay+mM87cB9+qs77NRgY3SsdFSXDN1DTAS09ob59vkg7T4sDlsIEb/d1RgI/WXD8beb8B14O4CQQrk3itp36VGXWhgDthDCupYx7jRSMPWJSrhRMtaZMY0C2q2uhGbiqFUngYeLwHqlq+AtETmfJfrbsRyILcu9jhUya59ahTd6ejAsjoDrAO+/2iOmi31MxhxKPRiJ7JDLQINus8yq1owxRq3vm8A75qdI8CpBj4oLo3e7ACbriwYHXlV9h0FXrS5WFdoCla7PrvAiusJ8PI/gUO9drsAnuO3V05Rx1W9pldvc8T7gbfFwSyqAL4A7Mtp7gErMEHlL3ct/1sSAWzv1km7VR0KyepQiNrSpnt1ajZ6LVMuPFCNZv4eNQvZuTAqgOD2gy3A4RptL2LnLCkPy3duFoLZkxWe6q3rOSC5dl16fH5p3WwWdS/iSLcgmVOBNWRtyrkNoddadUBBPQVONtq0Fc2pq+rwWi/vt9IwaoFMv9nwaa1qLG6pynMIy9tMW58BG85grw4D8mN0AumpzWBTuirNlKDuqV0usmET0Y5O7koUjkbsYlziptaDKlvByZNrRqXhCmyUCjSGztWvl4WfPh6Wc8F8GqVgGjIbjgocIpSSwbHom2vsbPTreoUqLMfs0u8ZmQoseFa+GJaamYku2HV+KrD81QvFRvO794GXPZgCLMfezXEbeQvJqxoYTfNQ5xrjNa8JYKrvAZtbY/FjwbqdU3E1OiVibQkul+FELqPRAKYCL5uduX0rA/4DSWWtHy3owqUAAAAASUVORK5CYII="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYJJREFUSEvFloFNAzEMRX8noBsAG9ANYALEBNANygSwATABsAEjMAIjsAEwQauPYuQGO7Fzlc7S6a5Rkhd/O3YXmMkWM3ExBbwBsAXwNHL4UfALgOsC5Pc6Cx8Ba6jw0vAs+ATAB4Ajw8MUPAO+AcDNzwC8T4VHwSKveDUZHgHXMdWSLosKl5X0Xdl7YCuRyLgocvOb8K9szFtgD1qD+fs7G3MP3IIKaAXgs3iajrkF7kFFVZGb85nxKXgNjkK13Cybkky853xYTpsJp8Gc/JAofeIxwbRbAI9qvYzrLVlaeci9JkG5ng8IZvyPq/1MMOeMSs21BFEFvu8B3FXQ15ILv8OHSC5L0lq4PagHjnj+A+C8NAzvDgv8H7QF7sH/YlXk83LDhPbALfipKh5eyXShEbAHfwNwVbTsJpJ1U3pNQtZY2c4/BDRWLG1NT2ViFNyLeTORpnjc8jwNjca4PrAle0hevVFGar1Ow9PQUY/lAGwqNN0YrHCaY6MehwHexNnAO5P5Xx+X+MzYAAAAAElFTkSuQmCC"/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAm9JREFUSEvFlo0xREEQhPsiQASIABEgAkSACBABIkAEiIAMEAEiQAZEQH1XO1f7xuzPXV3VTdWVOvd2erqnZ96OtKAYLQhXswDvSFqStJmKfpP0LellGhK9wICcSNqXtFwAAPxR0o0kiqlGCxiQK0lHrUTu9ztJZ0mJ8GgNGJYPktYaoEj8mT48SytW0/eDEvsSMKBPFVnfJV0naZHYB+DI/itpNwKPgJH3tcAUwFNJz6movdR3CoWt9RmZ8cNtYr7lZY+A6c9hwOJS0kUCxGgUUDIaz1IcqhH33icemMphm8dPOoR0xqIEaOeOE0M8YrGe2I+/e+CILUn4P2zPO9xNOyBAobTCYsDaA9MjloN/mHGiX60AFGPxydlyjtwrliAH5mHrif2OKWwzWUEk+JK0kVXBd1zOp1YkDqf3A6npn6+SCgFiLPJAdluRzDDPICugECgFc00LBsBRD83JVLkdZEMNxqhlNjtq+ZrAMEEeWAGey9vqd/R7CBxJbabA2QAjU8S8t4hQ6shceUJb/BiIZ1EBiadRITSXscvHyTPhlcfGoq9sN3psezuf2UgBFtHECz0LhCS2vei5va1srvkfuxlz8lYqRXWBRCuTGbWlABis6Xc+ejZatf5XVybV+rXJEoGlAdEnjMiLwoJikL40Vs2XBIk4TO+QzdYchgIId+PsjylmF8VQcvDerl0EkBOjTfZrAoO5XfRaY4Q3aNO/O1jr6mO3CP4CVluHvgiY0pLw4tdz2UPm6GJQY0tPGbvoWjQ+1wK25LAlEQxKc46sKMNYsVyq0QucJ0FuDOgv9OPXXW/MAtybe+6M5wL8B7cNkR999aQTAAAAAElFTkSuQmCC"/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvNlv0xBUEQxH8vAjJABIgAGRABGSACZEAEZEAGvAiQARkQAdVVt1Vt7d7O3buqe/vP+7jZ6Z2ent5bMNNazITL2gHvARsTsfENvOW5ahW/AAcTAS+Bw7UHvgauJqr4BlC+P6tG9VoAfwA7A6v/MnFeArfRiiWGZwseOnY/tvcIkFhDVNeAz4DTQPWu4kHAmuNXA9jvZlHA9wFgD0l7QxUrqERXzkTkDMU29fWu2acKakgffcBS81aXvKjMCrCP4iewXYrrA3bb1Pd/yswSyii0HLholwqKAr8DT13imqOlXJrZ8y52FPCDjY4n8Bakov25M3UHXAylukaZKtJYpWtT157+S37swEWfblHd6pVmXSu/a52RUcDHwKPRpN+iVD5cWpvdHZ60oJgT00bYQGpmoQqVXJRKUHph0KESAw5QtMsW1WNcKmdiFHBumxF7zGOq49q67uQ6qlxU6rP1AiiFqwWpFRJacbWA801+iN3uoczFwULMDAX2pGJDCq+pvPcAqwCHKpuK6pXAfPNsFf8CtthWH06HmKEAAAAASUVORK5CYII="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAThJREFUSEvtl9tNw0AQRU8qgBKgAugA0gFUkNABHQAdkApCCXQAVEBSAdABVAA60gzaWDYfdpbkwytF8cb2nLl3Zx+ZsKM22RGXvQEfAieVXFgDnxm7qfgceKoEngLPIzgdGK3eZp2NxbXh5lhcXcX1AuiO7Tu+XRLnwCr6F8ADcBD9rRRXG/gYeAeOYk12XTaRZU1wJiL0LcCqvS4sq6JYpSq2CZy1jFEVsJyrgHqt8ttGAtXAAoUtin23+hiXzlpU98Bd/OgefAb0VvwVVesJpVnV3hNmMTWnjy7c9AV/xLxVjcGdq4/AKfAKXEbfsdXeVK1onzXZ3orL4klr00ZBwn+PNvFAqrXbG+zLBs7gKlNh2VTnx0OjbpT3B4GH7M9/gjPTIYCud3Wi83hbA9gac2/+Sfyb4h86KG0fq02AugAAAABJRU5ErkJggg=="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiJJREFUSEvFlo0xJGEQhp+NgAzIABEcESCCIwIugiMCRIAIEMGRgYvgiAARuHpUd1Xv1OzOT43artrampn6+n3f/v1mrMhmK8JlLPA68DNI3wLvQwWMAT4CfgObAfYCnAES6G1DgLeBC2AX+ABOA+USWAMegV/Acx/0PsCGVUCVaueAYBlev6v4JL7fBIGl4e8CToc6fwiVhrbNDL2gP4KU5CTZaouADed15PFvABrKPuZZCWwAkjyONMydbQOWqWEzjyr2eYxZA543/1elJr58tQF/RljN6eA2aTA0RfcR/jmsRcDmRrbVJGLv7sVLQ+qz1e7PsFrRqqtp0Y/tNxq4OhDoD6Cip8LOwtLMq3nWJgXOOlB9VWdlq/ofsPOdwDmxaouZEglkqiZVbKhVasWm+axaf3V8TgosmKoOYoSa68yv3wQ3DXbFpMA6M7xZQKlaMuZ/P4CNwqTAKnmLAmr2ehbeYfTwpMDpvKlaxRbXa/T25KHO/nQs1gLzvctElbkeByl2zDkEahhbHUSRqVT1zc1l0d1FAXZOrgxjhskRqFkoVm7XKs1Cqyu115LwoG0igVxtkrB3HY/O6GVWV6q5Nh1GcM662HsoJ5GKfV52EXCH59VI4vWmMgi4SVSnWzGZ6tXH7ZN3MKdW9vnCyHQprgfrbhW0Xvb8NuimMgQ4SdT8+y5vnM0ptrQQxgDrUIUS8F/AwTeVscAdhd39eWXA/wEBZ54ft6cIzgAAAABJRU5ErkJggg=="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAtFJREFUSEvNljmsTVEUhr/XUaFUoVKQGKKgEFREg87QEEI0hkokElSGEEMphMbQIRHRIQoKMSRoERKiQaLQCPle1r5Zd79z7uEq7tvJycndZ+31/+tfw75jjGiNjQiXSQ18BDgcyjwAjgK+81oZNr5d+4Gzg9TsilhHV4CFwDdgazi8HM71LYD7+8J2OvAi9mqCPS5dwDoV0KjL0vEt4AcwDfgFrA+7YqO9dpJpXF3AMtZJE/OfwG9gaoNnFfAp0k8w+RvgAp4PK//s2HgLbKs8S1bQoYGLxFlq5cvRSEwiuZiaUtTHrSviLcBJ4EKwnwnMbUnbG+BLpGUnsAu48685VqK9UTSePQE8AU4Bl4BjlcPjwOpotaXAgfhuEZ5rqpE6YivxJjAnisqDPkrpNyW2tVwlx+/ity1U5LbKtfVtmqyDDbnyM7CO7wMv41AJSgfbgflx2JwaxZ4wOB/qlJ7/CFwMssWHxBcAqwp4Bi4MZZmXhD7HUFDGecCrykZSryMdKjKlIbelCCXRN6vbgLWzZz24BlgEPKscLwaeA/cAyUm2XjltfcAamy/nslJmqXeE1MppLq8Bm8LgOrA5ql7nH4DTldS2oE8ZvRNuJz8oxdcolNtRXDq0mFZEnsRcHsCP4q0iPpI3XeWxO2ZE3Uh6fLX1cRn6gjmPDwKPgavAoSoa/RiNvbsbWBbt9j1IWOnjec2ra4BsBKzauynihvT1th4G2Nqo+httxl3ATbeMe+vSfDYaU5HH6n+PTB2al+zUINy3DiRuUdYtqL31Uu/3BOiKuO1aFOxTeHF+e2fnJaB5H/p2UsY8CnUu6BlgSSA9jX8jGdyILUyLtHF1RSxz+7qMOn8LmsdqGYfeySpURq//zUzJUMAe0rHFpMP3IWHtUEIW1KyQ3f5vjXZQH9cslU0p61zWdpIrE3BQ203u/9UDmQ/7sau4hvXbeW5kwH8AkhqiH89p3VMAAAAASUVORK5CYII="/>
                    </div>
                    <div className='img'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYJJREFUSEvtle0xBEEQhp+LABkQgRIBIkAEiIAMkAERIAJEcGRABGSACKi3aqaq9c3n7ar9wfzZq9vZfqbf7n5nxkRrNhGXf3BU/hHYHqkMT8COj5WT+gY4HAl8Cxy1gs+Bs5HAF4Di/Vi5jCcD7wN35oi93f9lvj0A7lszVjPMRwLvAmrWJqk9eKFGifqrewVYBd7N+y6w/7ilz44BTUOTWqXa2Tq1gGNmvwbeAN4KJ9HMXof3n0H6he2ljHPulayZiWxHMela2rsMWHVMZSyj0BoM1uztGcmew++ch8ck7HcPgDyhS+rcyXWATRfJSmpLlLTLmtQ58CVw4sBXwGn4bzDYdqey3HKweNV5V7JjGGe7S2o/j8pUV1ystQ+2HnpC++LKTkCpqz04BvsIph+NX/vUQAL7tRRYgV5bLKuwZw3QQbuk1uZe2/SArKK1e1ZZRyn1XKkoIItUs6kMemattQb2HHuIOMsvDtZUnV6wDSo1VL9kDWv0IeBa7OL7vwf+BtzMVB/JETIcAAAAAElFTkSuQmCC"/>
                    </div>
                </section>
            </article>

            <article id='contato'>
                <img src={img_contato} alt='contato'/>
                <form className='form' onSubmit={sendEmail}>
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