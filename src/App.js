import React from 'react';

import Header from './component/header';

class App extends React.Component 
{  
   constructor()
   {
     super();
     this.state={
       startup:[]
     }
   }

   componentDidMount(){
     fetch('http://localhost:9000/api/v1/getAllStartup')
     .then(response=>response.json())
     .then(data=>{
       console.log(data.data);
     })
   }
  render()
  {
    return (
      <div className="App">
        <Header title='Welcome To StartUp World'/>
        hello
      </div>
    );
  }
}
  

export default App;
