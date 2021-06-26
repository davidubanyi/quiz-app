import React from 'react'

const Button = ({handleClick, type}:{handleClick:(type:string)=>void, type:string } ) => {
    return (
        <button className="choice--button" onClick={() =>handleClick(type)}>
            {type}
        </button>
    )
}

export default Button
