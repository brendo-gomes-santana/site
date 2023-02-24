import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';


import Header from './componentes/Header/index';

    import Home from './pages/Home/index';

import Footer from './componentes/Footer/index'


function Router(){
    const [ativarcor, setAtivarCor] = useState(false);
    useEffect(function(){
        function posicaoScroll(){
            if(window.scrollY > 10){
                setAtivarCor(true);
            }else{
                setAtivarCor(false);            
            }
        }
        window.addEventListener('scroll', posicaoScroll)
    }, [])

    return(
        <BrowserRouter>
        
            <Header acao={ativarcor}/>

            <Routes>
                <Route path='/' element={ <Home/> }/>
            </Routes>

            <Footer/>

        </BrowserRouter>
    );
}


export default Router;