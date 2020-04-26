import React from 'react';
import {NavLink}  from 'react-router-dom';
import List from './list';
import Header from './header';
class StartUpList extends React.Component 
{  
   constructor()
   {
     super();
     this.state={
       startupList:[{name:'flipkart',country:'india'},{name:'amazon',country:'usa'}]
     }
   }

   componentDidMount(){
       console.log('in componnet did mount');
     fetch('http://localhost:9000/api/v1/startup/getAllStartup')
     .then(response=>response.json())
     .then(data=>{
       console.log(data.data);
       this.setState({startupList:data.data});
     })
   }
  render()
  {

    const {startupList}=this.state;
    console.log('in startuprender ',startupList);
        return (

      <div className='grey'>

        
        <Header title='Welcome To StartUp World'/>
       <div  className='startup-list'>

           <h4>List of Startups </h4>
       {
               startupList.map((startup,index)=>
                
                    <List startup={startup} key={index}index={index}/>
                )
       }

      <NavLink to='/create' className='submit-btn1'>Create New </NavLink>
       </div>
      </div>
     
    );
  }
}
  

export default StartUpList;
