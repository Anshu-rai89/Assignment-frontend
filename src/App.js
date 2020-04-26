import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import StarupList from './component/startuplist';
import RegisterStartup from './component/reigterstartp';
class App extends React.Component 
{  
   
  render()
  {
    return (

      <BrowserRouter >
      <div className="App">


        <Switch>
          
        <Route path='/create'  component={RegisterStartup} />
          <Route path='/'  component={StarupList} />
        
         
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
  

export default App;
