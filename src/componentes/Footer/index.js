import './style-footer.css'

import img_face from './img/logo-facebook.png'
import img_inst from './img/logo-inst.png'
import img_link from './img/logo-link.png'

export default function Footer(){
    return(
        <footer>
            <div className="redes-sociais">
                <a target='blank' href='https://www.facebook.com/profile.php?id=100016522992617'><img src={img_face}/></a>
                <a target='blank' href='https://www.instagram.com/brem._.s/'><img src={img_inst}/></a>
                <a target='blank' href='https://www.linkedin.com/in/brendo-gomes-a90210232/'><img src={img_link}/></a>
            </div>
            <p>Desenvolvido por Brendo Gomes Santana</p>
        </footer>
    );
}