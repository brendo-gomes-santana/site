import './style-sobre.css';
import Modal from '../../componentes/Modal/index';

import {useState, useEffect} from 'react';

import img_eu from './img/eu.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

import cv from './Curriculo.pdf';

export default function Sobre(){
    const [openModal, setOpenModal] = useState(false);
    const [openModa2, setOpenModa2] = useState(false);
    const [openModa3, setOpenModa3] = useState(false);
    const [openModa4, setOpenModa4] = useState(false);
    const [openModa5, setOpenModa5] = useState(false);
    const [openModa6, setOpenModa6] = useState(false);

    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return(
        <main className="container-sobre" >
            <h1>Sobre</h1>
            <article id='um-pouco' data-aos='fade-up'>
                <img src={img_eu} alt='eu'/>
                <p>
                    Olá, me chamo Brendo Gomes Santana, estou cursando na área da Ciência da computação, irei me formar em 2025.
                    <br/>
                    Sempre me interessei pela área da tecnologia, aos 15 anos já tinha bastante conhecimento na área, mas não sabia muito o que realmente gostaria de fazer, só quando entrei na faculdade que percebi que gostava de programar. 
                    <br/>
                    Comecei a me focar no desenvolvendo web, meu objetivo é ser dev fullstatek, mas pra isso acontecer ainda há uma grande jornada pela frente, começando pelo front-end e depois indo pro back-end.
                </p>
            </article>
            <article id='meu-cv'>
                <a href={cv} download >Meu CV</a>
            </article>
            <article id='cursos-feitos' >
                <h2>Formação</h2>
                <hr/>
                <div className='box-modal'>
                    <button onClick={()=>{setOpenModal(true)}} className='button-modal'>Informática Avançada Multimída</button>
                    <button onClick={()=>{setOpenModa2(true)}} className='button-modal'>Informática Avançada - Programador Web</button>
                    <button onClick={()=>{setOpenModa3(true)}} className='button-modal'>Informática básica e essencial</button>
                    <button onClick={()=>{setOpenModa4(true)}} className='button-modal'>Informática Técnico em manuteção de computadores</button>
                    <button onClick={()=>{setOpenModa5(true)}} className='button-modal'>Crie um site simples usando HTML, CSS e JAVASCRIPT</button>
                    <button onClick={()=>{setOpenModa6(true)}} className='button-modal'>Web Scraping com Python</button>
                    <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
                        <p>HISTÓRIO DO CURSO</p>
                        <table className='tabela-formacao'>
                            <tr>
                                <td>MÓDULO</td>
                                <td>RESUMO DO CONTEÚDO APRENDIZAGEM</td>
                                <td>NOTA</td>
                            </tr>
                            <tr>
                                <td>aTuber Catcher</td>
                                <td>Instalação, Download de mídias, convesão de aúdio e vídeos</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Audacity</td>
                                <td>Conceitos de MP3 e outros formatos de áudio, instalação, gravação, edição, cortes, áudio, exportação de mídia.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Camtasia</td>
                                <td>Conceito de formatos de vídeos, instalação, importação de mídias, montagem de frames, vídeos com áudio e áudio, efeitos, legenda, exportação de mídias.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Internet Download Manager</td>
                                <td>Instalação, ativação no navegador, baixando vídeos e áudios direto pelo IDM</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Media Player Classic</td>
                                <td>Instalação e usabilidade.</td>
                                <td>10,0</td>
                            </tr>
                        </table>
                        <p>Período de 01/12/2015 à 01/01/2016, perfazendo o total de 30 horas</p>
                    </Modal>
                    <Modal isOpen={openModa2} setModalOpen={()=> setOpenModa2(!openModa2)}>
                        <p>HISTÓRICO DE CURSO</p>
                        <table className='tabela-formacao'>
                            <tr>
                                <td>MÓDULO</td>
                                <td>RESUMO DO CONTEÚDO APRENDIZAGEM</td>
                                <td>NOTA</td>
                            </tr>
                            <tr>
                                <td>HTML, CSS, PHP, MySQL</td>
                                <td>Elaboração de um projeto de desenvolvimento de sire completo. Projeto eleborado em rascunhos, onde o aluno avançou para o desenvolvimento com MR,
                                    desenvolveu uma loja virtual através de códigos HTML e PHP e códigos SQL para aplicação em BD. Estilos com CSS. O aluno desenvolveu a técnica desde 
                                    o projeto em rascunho ao desenvolvimento e hospedagem do site.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Photo Shop</td>
                                <td>Conceitos de dimensionamento, resolução e redimensionamento de imagens, formatos de imagens, elaboração de logos, efeitos especiais
                                    filtros, criação de gif's, conceito de camadas, histórico, interface gráfica e configuração. O aluno desenvolveu a técnica de trabalhar com atalhos,
                                    desenvolveu atividades como criar imagens, logos, efeitos especiais, animações, cirurgias digitais, técnicas de tratamento de imagens, etc.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Corel Draw</td>
                                <td>Conceitos de dimensionamento, resolução e redimensionamento de imagens, formatos de imagens, elaboração de logos, efeitos especiais
                                    filtros, criação de gif's, conceito de camadas, histórico, interface gráfica e configuração. O aluno desenvolveu a técnica de trabalhar com atalhos,
                                    desenvolveu atividades como criar imagens, logos, efeitos especiais, animações, cirurgias digitais, técnicas de tratamento de imagens, etc.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Flash</td>
                                <td>Animação, efeitos, elaboração de scripts para efeitos e interpolação movimentos, criação de banners para elaboração do site.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Internet</td>
                                <td>Conceitos de protocolos FTP, STMP, POP, elaboração de projetos com compartilhamento de arquivos via FTP, hospedagem  de sites, computação em nuvem, acesso remoto</td>
                                <td>10,0</td>
                            </tr>
                        </table>
                        <p>Período de 10/02/2015 à 19/02/2016, perfazendo o total de 280 horas</p>
                    </Modal>
                    <Modal isOpen={openModa3} setModalOpen={()=> setOpenModa3(!openModa3)}>
                        <p>HISTÓRICO DO CURSO</p>
                        <table className='tabela-formacao'>
                            <tr>
                                <td>MÓDULO</td>
                                <td>RESUMO DO CONTEÚDO APRENDIZAGEM</td>
                                <td>NOTA</td>
                            </tr>
                            <tr>
                                <td>NBI</td>
                                <td>conceito de informática, Hardware, Software, Vírus, Antivírus, tipos de softwares, dispositivos de entrada e saída, teclado, parte
                                    do teclado, conceitos e exibição de peças internas do gabinete, tipos de gabinetes, conhecimento de todas as teclas do teclados.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>WINDOWS</td>
                                <td>Contas de usuários, interface gráfica, botões de controle, janelas e caizas, propriedades de vídeos, propriedade de barra de tarefas,
                                    propriedades de data/hora, propriedades do Menu Iniciar, painel de controle, propriedades do mouse, pastas, comados e atalhos, Windows 
                                    Explorer, meu computador, Lixeira, meus documentos.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Word</td>
                                <td>interface gráfica do Word, Guia/Abas, painéis, ferramentas, digitação, RAND, seleção, formatação, fonte, parágrafo, estilos, correção
                                    ortigráfica e gramatical, colunas, capitular, bordas, imagens e clip Art, cabeçalho e rodapé, marcadores, numeração, margens e alinhamentos
                                    sumário, númeração de página, formas, Word Art, efeitos, tabelas, estilos e formatação de tabelas, mala direta.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>EXCEL</td>
                                <td>Interface gráfica do Excel, guia/abas, painéis, ferramentas, seleção, formatção, fonte, parágrafo, estilos, correção ortográfica e gramatical,
                                    bordas, imagens e clip'art, cabeçalho e rodapé, margens e alinhamentos, orientação do papel, numeração de página, formas, textos artisticos,
                                    efeitos, estilos e formatação de planilhas, filtros, fórmulas.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>POWER POINT</td>
                                <td>Interface gráfica do power point, guia/aba, painéis, ferramentas, criação de apresentação, layouts, formatação fonte, parágrafo estilo,
                                    correção ortográficae gramatical, imagens e Clip'Art, cabeçalho e rodapé, margens e alinhamentos, orientação do papel, formas, textos, artisticos,
                                    efeitos, estilos, animaçãp, transição de slides, apresentação.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>INTERNET, WINRAR</td>
                                <td>Redes, tipologia, www, e-mail, anexo, redes sociais, hospedagem, servidores, protolocos, compactação e descompactação de arquivos.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>DIGITAÇÃO</td>
                                <td>Exercícios práticos com mão esquerda, Exercícios práticos com a mão direita, Exercícioscom ambas as mãos e textos sem olhar para o teclado.</td>
                                <td>9,5</td>
                            </tr>
                        </table>
                        <p>Período de 08/06/2016 à 20/02/2017, perfazendoo total de 120 horas.</p>
                    </Modal>
                    <Modal isOpen={openModa4} setModalOpen={()=> setOpenModa4(!openModa4)}>
                        <p>HISTÓRICO DE CURSO</p>
                        <table className='tabela-formacao'>
                            <tr>
                                <td>MÓDULO</td>
                                <td>RESUMO DO CONTEÚDO APRENDIZAGEM</td>
                                <td>NOTA</td>
                            </tr>
                            <tr>
                                <td>Conceito de Sistemas Operacionais</td>
                                <td>DOS, Windows e Linux</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>DOS</td>
                                <td>Comandos de acesso a discos, copiar, recortar e colar diretórios. Arquivos, date, time, vol ou label, comando para formatção, exibir e ocultar arquivos, boot - acesso direto pelo DOS.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Hardware</td>
                                <td>Apresentação dos dispositivos internos: HD, memória RAM, unidades óptica, Floppy Disk, leitor de cartões, placa mãe, placa de vídeos, BIOS, jumper, slaver's,</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Software</td>
                                <td>Pacotes de programas: Office, Adobe, Instalar, desinstalar, remover programas, adicionar programas, painel de controle do windows.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>S.O</td>
                                <td>Configuração avançadas do sistema, services, limpar arquivos temporários, configuraçãodo config, configurar sistema para melhor desempenhom gerenciamento de
                                    dispositivos, gerenciamento de tarefas, data/hora, ferramentas administrativas, gerenciamento de discos, services.msc, firewall, atualização.
                                </td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Manutenção</td>
                                <td>Mantagem e desmontagem do gabinete, conectores, instalação de S.O, instalação de pacotes, partição de discos, instalação de unidades, unidades de disco externas.</td>
                                <td>10,0</td>
                            </tr>
                            <tr>
                                <td>Máquina virtual</td>
                                <td>Vm Ware, conceito, instação, uso, Downloads de prohramas e S.O monstados para MV.</td>
                                <td>10,0</td>
                            </tr>
                        </table>
                        <p>Período de 05/10/2015 à 20/05/2016, perfazendo o total de 120 horas.</p>
                    </Modal>
                    <Modal isOpen={openModa5} setModalOpen={()=> setOpenModa5(!openModa5)}>
                        <p>Com carga horária de 2 horas, no período de 24/03/2022 a 30/03/2022</p>
                    </Modal>
                    <Modal isOpen={openModa6} setModalOpen={()=> setOpenModa6(!openModa6)}>
                        <p></p>
                    </Modal>
                </div>
            </article>
        </main>
    );
}