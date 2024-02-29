import { Component } from "react";
import RegistrationContainer from "./app-container.jsx";
import ResetPasswordForm from "../components/reset-mot-passe.jsx";
import HomePage from "../containers/client-pages/client-home-page.jsx";
import Cookies from "js-cookie";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Alert
} from "reactstrap";
import TransparentFooter from "../components/Footers/TransparentFooter.js";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert1: false,
      alertMessage:{
        alertState:"",
        alertStrong:"Well Done !",
        alertMes:""

      },
      email: "",
      password: "",
      errorMessage: "",
      showRegistration: false,
      showForgotPassword: false, // Ajoutez cet état pour gérer l'affichage du formulaire de demande de réinitialisation
      forgotPasswordEmail: "", // État pour stocker l'e-mail de demande de réinitialisation
      forgotPasswordSuccess: false,
      firstFocus: false,
      lastFocus: false,
      currentUser: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
      },
    };
  }
  setFirstFocus(fF) {
    this.setState({ firstFocus: { fF } });
  }
  setLastFocus(lF) {
    this.setState({ lastFocusFocus: { lF } });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleConnectClick = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (email.trim() === "" || password.trim() === "") {
      this.setState({ errorMessage: "Veuillez remplir tous les champs." });
      setTimeout(() => {
        this.setState({ errorMessage: "" });
      }, 7000);
    } else {
      // Envoyer les informations de connexion au serveur
      const payload = {
        e_mail: email,
        pass_word: password,
      };

      try {
        const response = await fetch("http://192.168.56.1:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.status === 200) {
          const user = await response.json();
          console.log("Login successful");

          this.setState({
            currentUser: user,
          });
          console.log("Login", user);
          this.props.updateAppStatus("Home");
          this.props.updateuser(user);
          Cookies.set('user_email', user.mail);
        } 
        else {
          const data = await response.json();
          this.setAlert1(true);
          this.setState({ alertMessage: { alertStrong: "Error", alertState: "danger", alertMes: data.error  }  });
        }
      } catch (error) {
     
        this.setAlert1(true);
        this.setState({ alertMessage: {alertState: "danger", alertMes: "Erreur de connexion."}})
      }
    }
  };
  setAlert1 = (al) => {
    this.setState({alert1: al})
  }

  handleRegisterClick = () => {
    // Code pour afficher le formulaire d'inscription
    this.props.updateAppStatus("Register");
  };

  // Méthode pour gérer le clic sur "Mot de passe oublié"
  handleForgotPasswordClick = () => {
    this.setState({
      showForgotPassword: true,
    });
  };

  render() {
    const { showRegistration, showForgotPassword } = this.state;

    if (showRegistration) {
      return <RegistrationContainer />;
    }
    if (showForgotPassword) {
      // Affichez le formulaire de demande de réinitialisation du mot de passe
      return (
        <div>
          {/* Formulaire de demande de réinitialisation du mot de passe */}
          <ResetPasswordForm />
        </div>
      );
    }
    if (this.state.activeTab === "profil") {
      if (this.state.currentUser) {
        return (
          <HomePage
            user={this.state.currentUser}
          />
        );
      } else {
        return <div>Loading...</div>;
      }
    }
    return (
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("../assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (this.state.firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        id="email_id"
                        name="email"
                        className="inputForm"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        onFocus={() => this.setFirstFocus(true)}
                        onBlur={() => this.setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (this.state.lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Pss"
                        type="password"
                        id="password_id"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        onFocus={() => this.setFirstFocus(true)}
                        onBlur={() => this.setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={this.handleConnectClick}
                      size="lg"
                    >
                      Se connecter
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={this.handleRegisterClick}
                        >
                          Créer nouveau compte
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          href="#pablo"
                          onClick={this.handleForgotPasswordClick}
                        >
                          Mot de passe oublié ?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
        <Alert color= {this.state.alertMessage.alertState} isOpen={this.state.alert1} className='floating-alert'>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>{this.state.alertMessage.alertStrong}</strong> {this.state.alertMessage.alertMes}
            <button
              type="button"
              className="close"
              onClick={() => this.setAlert1(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
          </Alert>
      </div>
    );
  }
}

export default LoginContainer;
