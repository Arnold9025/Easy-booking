
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import '../admin_dashbord/css/style.css'; // Assurez-vous que le chemin du fichier CSS est correct

const UserListPage = ({ users, onVerifyUser }) => {
  
  return (
    <div className="user-list">
      <Typography variant="h6" className="heading">
        Liste des utilisateurs
      </Typography>
      <TableContainer component={Paper} className="table-container">
        <Table className="tablee">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Nom</TableCell>
              <TableCell className="table-header">Rôle</TableCell>
              <TableCell className="table-header">Date de Réservation</TableCell>
              <TableCell className="table-header">Statut</TableCell>
              <TableCell className="table-header">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.uuid}>
                <TableCell className="table-cell">{`${user.nom} ${user.prenom}`}</TableCell>
                <TableCell className="table-cell">{user.role}</TableCell>
                <TableCell className="table-cell">N/A</TableCell>
                <TableCell className={`table-cell ${user.statue === 'verified' ? 'verified' : 'not-verified'}`}>
                  {user.statue === 'verified' ? (
                    <IconButton aria-label="Vérifié" className="icon-button">
                      <CheckCircleOutline className="icone" />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="Non vérifié" className="icon-button">
                      <ErrorOutline className="iconee" />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell className="table-cell">
                    {user.statue !== 'verified' && (
                        <button
                            className="verify-button"
                            onClick={() => onVerifyUser(user.uuid)}
                        >
                            Vérifier
                        </button>
                    )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserListPage;