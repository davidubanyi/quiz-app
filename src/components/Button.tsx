import React from 'react'

type ChoiceButtonProps = {
    handleClick:(type:string)=>void, 
    type:string 
}

const Button:React.FC<ChoiceButtonProps> = ({handleClick, type} ) => {
    return (
        <button className="choice--button" onClick={() =>handleClick(type)}>
            {type}
        </button>
    )
}

export default Button
