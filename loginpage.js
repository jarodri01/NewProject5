import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './store/userstore';
import LoginForm from './loginForm';
import SubmitButton from './submitbutton'
import './App.css';

class LoginPage extends React.Component {

  async componentDidMount(){
    try{

      let res = await fetch('/isLoggedIn',{
        method:'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else{
        UserStore.loading=false;
        UserStore.isloggedIn = false;

      }
    }
    catch(e){
        UserStore.loading=false;
        UserStore.isloggedIn= false;

    }
  }

  async userLogout(){
    try{

      let res = await fetch('/logout',{
        method:'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }

      });

      let result = await res.json();

      if (result && result.success){
        UserStore.isloggedIn= false;
        UserStore.username='';
        
      }
     
    }
    catch(e){
        console.log(e)

    }
  }
  
  render(){

    if (UserStore.loading){
      return(
        <div className='App'>
          <div className='container'>
            Loading, Please wait...
          </div>
        </div>
      );
    }
    else{

      if (UserStore.isloggedIn){
          return(
            <div className='App'>
              <div className='container'>
              Welcome {UserStore.username}

              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={ () => this.userLogout() }

              />

              </div>
            </div>
          );
      }

        return (
          <div className='App'>
              <div className="container">
                <LoginForm/>
              </div>
          </div>
        );
      }
    }
}

export default observer(LoginPage);
