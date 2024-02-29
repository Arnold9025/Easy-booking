 import React, { Component } from 'react';
import ClientHomePage from './client-pages/client-home-page';
import AdminDashboard from '../components/admin_dashbord/admin-dashboard';
import NewUserForm from '../components/admin_dashbord/new-user-form'; 
import HomePageAgency from './agencies-pages/home-page-agency';

class ConnectionRedirectionHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewUserForm: false,
    };
  }

  handleNewUserClick = () => {
  // Affiche le formulaire lorsqu'on clique sur "Nouvel utilisateur"
    this.setState({ showNewUserForm: true });
  };

  render() {
    const {showNewUserForm } = this.state;

    if(this.props.currentUser.role === 'client'){
        return (
           <ClientHomePage currentUser={this.props.currentUser} />
          );
    } else if (this.props.currentUser.role === 'agence'){
    return (
      <div>
        <HomePageAgency currentUser={this.props.currentUser} />
      </div>
    ); 
  } else if (this.props.currentUser.role === 'admin') {
      if (showNewUserForm) {
      // Affiche le formulaire si showNewUserForm est vrai
        return <NewUserForm />;
      } else {
        // Sinon, affiche le tableau de bord de l'administrateur
          return <AdminDashboard currentUser={this.props.currentUser}/>;
      }
    }
  }
}

export default ConnectionRedirectionHandler;
