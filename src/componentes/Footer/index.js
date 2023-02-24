import './style-footer.css'

import img_face from './img/logo-facebook.png'
import img_inst from './img/logo-inst.png'
import img_link from './img/logo-link.png'

export default function Footer(){
    return(
        <footer>
            <div className="redes-sociais">
                <a href='#'><img src={img_face}/></a>
                <a href='#'><img src={img_inst}/></a>
                <a href='#'><img src={img_link}/></a>
            </div>
            <p>Desenvolvido por Brendo Gomes Santana</p>
        </footer>
    );
}