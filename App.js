import React from 'react';
import LoginPage from './loginpage';
import NavBar from './nav';
import SchedulerCalendar from './home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
   render(){
     return(
    <Router >
    <div className='App'>
      <NavBar/>
      <Switch>
       <Route path = "/home" component = {SchedulerCalendar} />
       <Route path = "/loginpage" component = {LoginPage}/>
       </Switch>
       </div>
 </Router>
     );
   }
  }
export default App;