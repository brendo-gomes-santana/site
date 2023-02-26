const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right:'0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    tranform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
}

export default function Modal({isOpen, children}){
    if(isOpen){
        return(
            <div style={BACKGROUND_STYLE}>
                <button>x</button>
                <div style={MODAL_STYLE}>{children}</div>

            </div>
        )
    }
    return null
}
