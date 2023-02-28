import './style-modal.css';

export default function Modal({isOpen, children, setModalOpen}){
    if(isOpen){
        return(
            <div id='container-modal'>
                <div id='box'>
                    {children}
                    <div id='base_do-botao'>
                        <button onClick={setModalOpen}>x</button>
                    </div>

                </div>
            </div>
        )
    }
    return null
}
