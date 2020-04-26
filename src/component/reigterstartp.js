import React from 'react';
import {Redirect}  from 'react-router-dom'
import Header from './header';

import qs from 'qs';
import  axios from 'axios'
class RegiterStartup extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'',
            country:''
        }
    }

    handleOnChange=(e)=>
    {
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmitt=(e)=>
    {
        e.preventDefault();
        let data=this.state;
        console.log('data',data);
        let obj={
            name:data.name[0],
            country:data.country[0]
        }
        data=qs.stringify(obj);
      
        axios.post('http://localhost:9000/api/v1/startup/registerStartup', data, {
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               
           }
       }).then(data=>
           {
               console.log('in axios',data);
           })
    }
    render()
    {
        return(

            <div className='grey'>
                 <Header title='Create New StartUp'  />
              <div className='form-div'>
                 .
                  <form  className='register-form' onSubmit={this.handleSubmitt}>
                      <p className='name'>
                          <span > Name</span>
                          <input name='name'className='input-type'type='text' placeholder='name' onChange={this.handleOnChange}/>
                      </p>
                      <p className='name'>
                          <span > country</span>
                          <input name='country' className='input-type1'type='text' placeholder='country'onChange={this.handleOnChange}/>
                      </p>
                     <button className='submit-btn' type='submit' >Save</button>
                  </form>

              </div>
              </div>
        )
    }
}


export default RegiterStartup;