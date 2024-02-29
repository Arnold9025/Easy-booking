import React, { useState } from 'react';
import '../styles/style-reset-password.css';
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
  Col
} from "reactstrap";
import TransparentFooter from "../components/Footers/TransparentFooter.js";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (email.trim() === '') {
      console.error("Veuillez entrer une adresse e-mail.");
      return;
    }
  
    try {
      const response = await fetch('http://192.168.56.1:5000/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });
  
      if (response.ok) {
        console.log('Mot de passe réinitialisé avec succès');
        setEmailNotFound(false)
        setResetSuccess(true);
      } 
      else if (response.status === 404) {
        console.error('Adresse e-mail non trouvée');
        setResetSuccess(false)
        setEmailNotFound(true)
      }
      else {
        console.error('Erreur lors de la réinitialisation du mot de passe');
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
    }
  };
 
  const handleBackToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="page-header clear-filter" filter-color="black">
      <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/reset-mot-passe.jpg") + ")"
          }}
        ></div>
        <div className="content">
        <Container>
        <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
      <h5 style={{
            color: "black",
            fontWeight: "bold"
          }} >Réinitialisation du mot de passe</h5>
      <Form onSubmit={handleSubmit}>
      <CardHeader className="text-center" style={{ marginTop: '-100px' }}>
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("../assets/img/now-logo.png")}
                      ></img>
                    </div>
      </CardHeader>
      <CardBody
        style={{ marginTop: '-10px' }}>
                    
        <div className="form-group">
          <label className="label">Adresse e-mail</label>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Nouveau mot de passe</label>
          <input
            type="password"
            className="input-field"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
      </CardBody>
      <CardFooter className="text-center">
        <Button type="submit" block
                      className="btn-round"
                      color="info"
                      size="lg">
          Réinitialiser le mot de passe
        </Button>
        {resetSuccess && <div className="success-message">Le mot de passe a été réinitialisé avec succès.</div>}
        {emailNotFound && <div className="error-message">Adresse e-mail non trouvée.</div>}
        <div className="pull-right">
                      <h6>
                        <a
                          className="forgot-password-link"
                          href="#pablo"
                          onClick={handleBackToLogin}
                        >
                          Se connecter
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
    </div>
  );
};

export default ResetPasswordForm;
