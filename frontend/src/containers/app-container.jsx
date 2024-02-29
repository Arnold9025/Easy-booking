import React, { Component } from 'react';
import PersonalInfoStep from './PersonalInfoStep';
import ContactInfoStep from './ContactInfoStep';
import ReviewStep from './ReviewStep';
import '../styles/registrationcontainer.css';
import LoginContainer from './login-container';
import ConnectionRedirectionHandler from './connection-redirec-handler';
import DefaultPage from './default-page';
class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1, // Track the current step
      // Define form data for each step
      personalInfo: {
        firstName: '',
        lastName: '',
        isAgency: false,
      },
      contactInfo: {
        email: '',
        phone: '',
        password: '',
      },
      acceptedTerms: false,
      appStatus: 'Default',
      currentUser: {},
    };
    this.handleConnectionOnclick = this.handleConnectionOnclick.bind(this)
  }

  // Function to handle changing steps
  handleStepChange = (step) => {
    this.setState({ currentStep: step });
  };

  // Function to handle form data changes for each step
  handleStepDataChange = (step, data) => {
    this.setState((prevState) => ({
      [step]: { ...prevState[step], ...data },
    }));
  };

  // Handle form submission or other actions when all steps are completed
  handleRegistrationComplete = () => {
    const { personalInfo, contactInfo } = this.state;
  
    // Create an object with user data to send to the server
    const newUser = {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      mail: contactInfo.email,
      phone: contactInfo.phone,
      password: contactInfo.password,
      isAgency: personalInfo.isAgency
      // Add other fields as needed
    };
  
    // Make a POST request to the server to insert the user
    fetch('http://192.168.56.1:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User registration successful:', data);
        this.setState({appStatus: 'Login'})
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle errors here
      });
  };

  updateAppStatus = (status) => {
    this.setState({ appStatus: status });
  };
  handleConnectionOnclick(){
    this.updateAppStatus('Login')
  }

  updateCurrentUSer = (user) => {
    this.setState({ currentUser: user });
  };
  

  render() {
    const { currentStep, personalInfo, contactInfo, acceptedTerms, appStatus } = this.state;

    if (appStatus === 'Login') {
      return (
        <LoginContainer
          updateAppStatus={this.updateAppStatus}
          updateuser={this.updateCurrentUSer}
        />
      );
    } else if (appStatus === 'Register') {
      return (
        <div className="inscription-page">
          {currentStep === 1 && (
            <div>
            <PersonalInfoStep
              data={personalInfo}
              onNext={() => this.handleStepChange(2)}
              onChange={(data) => this.handleStepDataChange('personalInfo', data)}
            />
            <button onClick={this.handleConnectionOnclick}>Se connecter</button>
            </div>
          )}
          {currentStep === 2 && (
            <div>

            <ContactInfoStep
              data={contactInfo}
              onPrev={() => this.handleStepChange(1)}
              onNext={() => this.handleStepChange(3)}
              onChange={(data) => this.handleStepDataChange('contactInfo', data)}
            />
            <button onClick={this.handleConnectionOnclick}>Se connecter</button>
            </div>
          )}
          {currentStep === 3 && (
        <div>
             <ReviewStep
              personalInfo={personalInfo}
              contactInfo={contactInfo}
              acceptedTerms={acceptedTerms}
              onPrev={() => this.handleStepChange(2)}
              onSubmit={this.handleRegistrationComplete}
            />
            <button onClick={this.handleConnectionOnclick}>Se connecter</button>
        </div>
           
          )}
        </div>
      );
    } else if (appStatus === 'Home') {
      return <ConnectionRedirectionHandler currentUser={this.state.currentUser} />;
    } else if(appStatus === 'Default'){
      return < DefaultPage           updateAppStatus={this.updateAppStatus}      />
    }
  }
}

export default RegistrationContainer;
