import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { AccountCircle, AlternateEmail, Phone, Lock } from '@mui/icons-material';
import '../admin_dashbord/css/style.css';

const NewUserForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer les données utilisateur au backend ici

      // Réinitialiser le formulaire après l'enregistrement réussi
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
      });

      setSuccessMessage('Utilisateur enregistré avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    }
  };

  return (
    <Container maxWidth="md" className="form-containere">
      <Typography variant="h4" gutterBottom className="form-title">
        Création d'un nouvel utilisateur
      </Typography>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
              className="form-field"
              InputProps={{
                startAdornment: (
                  <AccountCircle fontSize="small" style={{ marginRight: '8px' }} />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Prénom"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
              className="form-field"
              InputProps={{
                startAdornment: (
                  <AccountCircle fontSize="small" style={{ marginRight: '8px' }} />
                ),
              }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="E-mail"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
          className="form-field"
          InputProps={{
            startAdornment: (
              <AlternateEmail fontSize="small" style={{ marginRight: '8px' }} />
            ),
          }}
        />
        <TextField
          fullWidth
          label="Téléphone"
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
          className="form-field"
          InputProps={{
            startAdornment: <Phone fontSize="small" style={{ marginRight: '8px' }} />,
          }}
        />
        <TextField
          fullWidth
          label="Mot de passe"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
          className="form-field"
          InputProps={{
            startAdornment: <Lock fontSize="small" style={{ marginRight: '8px' }} />,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
          className="form-button"
        >
          Créer
        </Button>
      </form>
    </Container>
  );
};

export default NewUserForm;