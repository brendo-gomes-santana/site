import { Container, Descricao, Sobre, Contato, Base } from "./styled";
import { motion } from "framer-motion";
import { FaUserTie } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import * as BsIcon from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

import Ferramentas from "./components/Ferramentas";
import img from './assets/foto_minha.jpg';



const RedesSociais = [
  { id: 1, icon: <GrFacebook />, url: 'https://www.facebook.com/profile.php?id=100016522992617' },
  { id: 2, icon: <BsIcon.BsLinkedin />, url: 'https://www.linkedin.com/in/brendo-gomes-santana-a90210232/' },
  { id: 3, icon: <BsIcon.BsInstagram />, url: 'https://www.instagram.com/brem._.s/' }
]

export default function App() {
  return (
    <Container>
      <Descricao>
        <h1>Bem-vindo ao meu portfólio de <mark>programação</mark> </h1>
        <motion.img
          animate={{
            borderRadius: ['5em 100em 5em 100em', '1em 25em 10em 50em', '100em 5em 100em 5em', '1em 50em 1em 50em'],
          }}
          transition={{
            duration: 10, repeat: Infinity, ease: 'linear'
          }}
          src={img} alt='fotominha' />
      </Descricao>
      <Sobre>
        <h3><FaUserTie /> Quem é Brendo Gomes?</h3>
        <p>Olá, meu nome é Brendo Gomes Santana. Atuo na área de programação e atualmente estou cursando o quarto período na Faculdade Estácio. Apesar de estar ainda em minha jornada acadêmica, acumulo uma considerável experiência na área. Desde muito jovem, desenvolvi uma profunda paixão pela tecnologia, e meu primeiro contato com a programação ocorreu aos 13 anos de idade. Embora tenha me interessado na época, não dei continuidade imediata. Somente quando iniciei minha graduação, decidi dedicar-me integralmente ao aprendizado e aprimoramento na área da programação.
        </p>
        <p>Hoje, tenho a capacidade de programar em diversas frentes, abrangendo o desenvolvimento backend, frontend e mobile. Isso me permite participar ativamente em todas as fases do processo de criação de sistemas. Não obstante, mantenho um compromisso constante com o estudo, buscando adquirir novas linguagens e aprimorar aquelas que já domino. Estou focado em meu desenvolvimento contínuo e em aprimorar minhas habilidades técnicas para proporcionar soluções cada vez mais eficazes na área de programação.
        </p>
      </Sobre>
      <Ferramentas />
      <h4> <BsTelephone /> Entre em Contato</h4>
      <Contato>
        <Base>
          <p><strong>Email</strong></p>
          <p>brendogs2021@gmail.com</p>
        </Base>
        <Base>
          <p><strong>Celular</strong></p>
          <p>(92) 9 99205-0852</p>
        </Base>
        <Base>
          <p><strong>Redes Sociais</strong></p>

          {RedesSociais.map((rede) => {
            return (
              <a href={rede.url} key={rede.id}>
                {rede.icon}
              </a>
            )
          })}
        </Base>
      </Contato>
    </Container>
  )
}
