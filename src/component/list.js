import React from 'react';


const List =(props)=>
{
    const {startup,index}=props;
    console.log('in list ',startup);
    return(
        <div className='list'>
              <span className='no'>{index+1}</span>
              
       <span className='info'> {startup.name + ','+startup.country}</span>
            </div>
    )
}

export default List;