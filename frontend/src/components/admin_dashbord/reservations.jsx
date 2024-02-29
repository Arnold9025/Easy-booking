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
import { CheckCircleOutline, ErrorOutline, Visibility } from '@mui/icons-material';
import '../admin_dashbord/css/style.css'; 

const recentBookings = [
  {
    nomClient: 'John Doe',
    dateReservation: '2023-09-12',
    status: 'Confirmée',
  },
  {
    nomClient: 'Jane Smith',
    dateReservation: '2023-09-11',
    status: 'En attente',
  },
  {
    nomClient: 'Alice Johnson',
    dateReservation: '2023-09-12',
    status: 'Annulée',
  },
  {
    nomClient: 'Arona Diop',
    dateReservation: '2023-09-10',
    status: 'Confirmée',
  },
  {
    nomClient: 'Saliou Thiongane',
    dateReservation: '2023-09-11',
    status: 'En attente',
  },
];

const RecentBookings = () => {
  return (
    <div className="recent-bookings">
      <Typography variant="h6" className="heading">
        Réservations récentes
      </Typography>
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Nom du Client</TableCell>
              <TableCell>Date de Réservation</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentBookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.nomClient}</TableCell>
                <TableCell>{booking.dateReservation}</TableCell>
                <TableCell className="status">
                  {booking.status === 'Confirmée' ? (
                    <IconButton color="primary" aria-label="Confirmée">
                      <CheckCircleOutline />
                    </IconButton>
                  ) : booking.status === 'En attente' ? (
                    <IconButton color="warning" aria-label="En attente">
                      <ErrorOutline />
                    </IconButton>
                  ) : (
                    <IconButton color="error" aria-label="Annulée">
                      <ErrorOutline />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell className="action">
                  <IconButton color="primary" aria-label="Voir détails">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecentBookings;