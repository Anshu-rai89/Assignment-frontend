import React from 'react'

const Header=(props)=>
{
    const {title}=props;
    return(
        <div className='header'>
            <span  className='title'>{props}</span>
        </div>
    )
}


export default Header;