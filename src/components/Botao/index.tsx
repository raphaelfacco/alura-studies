import React from "react";
import style from './Botao.module.scss'

interface Props {
    children?: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void
}

function Botao({children, type, onClick} : Props){
    return (
        <button 
            onClick={onClick} 
            className={style.botao} 
            type={type}>
            {children}
        </button>          
    )
}

export default Botao;