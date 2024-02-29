import React, { Component } from 'react'
import RegistrationContainer from './app-container';
import LoginContainer from '../containers/login-container';

class TestInputContainer extends Component {

   constructor(props) {
    super(props);
    this.state = {
      showRegistration: false,
      showLogin: true, // Par défaut, afficher le formulaire de connexion
    };
  }

  

    render () {
      const { showRegistration, showLogin } = this.state;

      if (showRegistration) {
        return <RegistrationContainer />;
      } 
      else if (showLogin) {
        return <LoginContainer />;
      }
    }
}

export default TestInputContainer