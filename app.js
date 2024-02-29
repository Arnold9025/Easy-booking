const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dao = require('./server/dao');
const uuid = require('uuid');
const CONTENT_TYPE_JSON = 'application/json'
const axios = require('axios');
const cors = require('cors');

const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend/build/')));
app.use(cors());



app.post('/offres', (req, res) => {
    const newoffer = req.body; 
    const randomUuid = uuid.v4();
    dao.connect();
    dao.query( 'INSERT INTO offres (id, nom_offre, vol, hotel, id_agence, image, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [randomUuid, newoffer.nom_offre, newoffer.vol, newoffer.hotel, newoffer.id, newoffer.url_image, newoffer.totalCost],
                    (result, error) => {
                        if (error) {
                            console.error(error);
                            res.status(500).json({ error: 'An error occurred' });
                        } else {
                            console.log('User inserted successfully:', result);
                            res.status(201).json({ message: 'offer inserted successfully' });
                        }
                        dao.disconnect();
                    }
);   })


app.post('/users', (req, res) => {
    const newUser = req.body; 
    const randomUuid = uuid.v4();
    console.log(newUser);
    dao.connect();
    dao.query('SELECT * FROM utilisateurs WHERE mail = ?', [newUser.e_mail], (emailResult, emailError) => {
        if (emailError) {
            console.error(emailError);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            if (emailResult.length === 0) {
                if(newUser.isAgency === 'agency'){

                dao.query(
                    'INSERT INTO utilisateurs (uuid, nom, prenom, role, tel, mdp, mail, statue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [randomUuid, newUser.lastName, newUser.firstName, 'agence', newUser.phone, newUser.password, newUser.mail, 'no-verified'],
                    (result, error) => {
                        if (error) {
                            console.error(error);
                            res.status(500).json({ error: 'An error occurred' });
                        } else {
                            console.log('User inserted successfully:', result);
                            res.status(201).json({ message: 'User inserted successfully' });
                        }
                        dao.disconnect();
                    }
                );   } else if (newUser.isAgency === false ){
                    dao.query(
                        'INSERT INTO utilisateurs (uuid, nom, prenom, role, tel, mdp, mail, statue) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                        [randomUuid, newUser.lastName, newUser.firstName, 'client', newUser.phone, newUser.password, newUser.mail, 'verified'],
                        (result, error) => {
                            if (error) {
                                console.error(error);
                                res.status(500).json({ error: 'An error occurred' });
                            } else {
                                console.log('User inserted successfully:', result);
                                res.status(201).json({ message: 'User inserted successfully' });
                            }
                            dao.disconnect();
                        }
                    );   
                }
            } 

        } });

});
app.get('/offrespopulaire', (req, res) => {
    dao.connect();
    dao.query('SELECT * FROM offres WHERE categorie = ?', ['populaire'], (offres, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json(offres);            
            console.log(offres);
        }
    });
});
app.get('/offres', (req, res) => {
    dao.connect();
    dao.query('SELECT * FROM offres', [], (offres, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json(offres);
            console.log(offres);

        }
        dao.disconnect();
    });
});
app.get('/offres/:search', (req, res) => {
    const search = "%"+ req.params.search + "%"
    dao.connect();
    dao.query('SELECT * FROM offres WHERE  nom_offre LIKE ? OR description LIKE ?', [ search, search], (offres, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json(offres);
        }
        dao.disconnect();
    });
});

// Route pour l'inscription des administrateurs
app.post('/admin-users', (req, res) => {
    const newAdminUser = req.body;
    const randomUuid = uuid.v4();
    const role = 'admin';

    dao.connect();
    dao.query(
        'INSERT INTO utilisateurs (uuid, nom, prenom, role, tel, mdp, mail) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [randomUuid, newAdminUser.lastName, newAdminUser.firstName, role, newAdminUser.phone, newAdminUser.password, newAdminUser.mail],
        (result, error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
            } else {
                console.log('Admin user inserted successfully:', result);
                res.status(201).json({ message: 'Admin user inserted successfully' });
            }
            dao.disconnect();
        }
    );
});

// Read (GET) - Retrieve all users
app.get('/users', (req, res) => {
    dao.connect();
    dao.query('SELECT * FROM utilisateurs', [], (users, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.status(200).json(users);
        }
        dao.disconnect();
    });
});

// Update (PUT) - Update user information
app.put('/users/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    const updatedUserData = req.body; // Assuming the request body contains updated user data
    dao.connect();
    dao.query(
        'UPDATE utilisateurs SET nom = ?, prenom = ?, role = ?, tel = ?, mdp = ?, mail = ? WHERE uuid = ?',
        [updatedUserData.firstName, updatedUserData.lastName, updatedUserData.role, updatedUserData.phone, updatedUserData.password, updatedUserData.email, uuid],
        (result, error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
            } else {
                console.log('User updated successfully:', result);
                res.status(200).json({ message: 'User updated successfully' });
            }
            dao.disconnect();
        }
    );
});

// Delete (DELETE) - Delete a user
app.delete('/users/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    dao.connect();
    dao.query('DELETE FROM utilisateurs WHERE uuid = ?', [uuid], (result, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            console.log('User deleted successfully:', result);
            res.status(200).json({ message: 'User deleted successfully' });
        }
        dao.disconnect();
    });
});
app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user);
    dao.connect();

    dao.query('SELECT * FROM utilisateurs WHERE mail = ?', [user.e_mail], (emailResult, emailError) => {
        if (emailError) {
            console.error(emailError);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            if (emailResult.length === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                if (emailResult[0].mdp !== user.pass_word) {
                    res.status(401).json({ error: 'Mot de passe incorrect' });
                } else if(emailResult[0].statue === 'no-verfied') {
                    res.status(401).json({ error: 'Votre compte n \' a pas encore ete verifie' });
                } else {
                    res.status(200).json(emailResult[0]);

                }
            }
        }
        dao.disconnect();
    });
});


app.get('/searchHotels/:cityName', async (req, res) => {
    const API_KEY = '013c30408amshf97c0cbc1e18104p1816d9jsnbb03b91170db';

    const options1 = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        params: {
            name: req.params.cityName,
            locale: 'en-gb'
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    try {
        const response1 = await axios.request(options1);

        if (!response1.data || response1.data.length === 0) {
            return res.status(400).json({ error: 'Ville non trouvée' });
        }

        const villeId = response1.data[0].dest_id;
        console.log(villeId);
        const options2 = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
            params: {
                checkin_date: '2023-09-27',
                dest_type: 'city',
                units: 'metric',
                checkout_date: '2023-09-28',
                adults_number: '2',
                order_by: 'popularity',
                dest_id: villeId,
                filter_by_currency: 'USD',
                locale: 'en-gb',
                room_number: '1',
                children_number: '2',
                children_ages: '5,0',
                categories_filter_ids: 'class::2,class::4,free_cancellation::1',
                page_number: '0',
                include_adjacency: 'true'
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };

        const response2 = await axios.request(options2);
        console.log(response2.data)
        res.json(response2.data.result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la recherche des hôtels' });
    }
});

app.get('/users/:email', (req, res) => {
    const userEmail = req.params.email;
    dao.connect();
    dao.query('SELECT * FROM utilisateurs WHERE mail = ?', [userEmail], (users, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            if (users.length === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(users[0]); // Renvoyer les informations du premier utilisateur trouvé
            }
        }
        dao.disconnect();
    });
});

app.get('/searchFlights/:departure/:arrival/:departureDate/:returnDate/:adults/:children/:infants', async (req, res) => {
    const API_KEY = 'ke50-DdtALisQI4qMxA1xO900NUVfJF2';
    const DEP = req.params.departure;
    const ARR = req.params.arrival
    const DEPDATE = req.params.departureDate.replace(/-/g, "%2F")
    const RETDATE = req.params.returnDate.replace(/-/g, "%2F")
    const ADULTS = req.params.adults
    const CHILDREN = req.params.children
    const INFANTS = req.params.infants
    function additionner(str1, str2, str3) {
        const num1 = parseFloat(str1);
        const num2 = parseFloat(str2);
        const num3 = parseFloat(str3)
        return num1 + num2 + num3;
      }
    const result = additionner(ADULTS, CHILDREN, INFANTS)
   
    async function searchFlights() {
      try {
        const response = await axios.get(`https://api.tequila.kiwi.com/v2/search?fly_from=${DEP}&fly_to=${ARR}&date_from=${DEPDATE}&date_to=${DEPDATE}&return_from=${RETDATE}&return_to=${RETDATE}&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&adults=${ADULTS}&children=${CHILDREN}&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&curr=USD&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500`, {
            headers: {
                'accept': 'application/json',
                'apikey': API_KEY,
              },
                    });
    
        console.log(response.data.data);
       res.json(response.data.data)
        // Handle the API response data here
      } catch (error) {
        console.error('Error:', error);
        res.json ({error})
      }
    }
    if (result > 9) {
        
    } else {
        searchFlights();

    }
    
});

  //renitialisé mot de passe
  app.post('/resetpassword', (req, res) => {
    const { email, newPassword } = req.body;

    // Assurez-vous que l'adresse e-mail et le nouveau mot de passe sont fournis
    if (!email || !newPassword) {
        return res.status(400).json({ error: 'Veuillez fournir une adresse e-mail et un nouveau mot de passe.' });
    }

    dao.connect();

    dao.query('SELECT * FROM utilisateurs WHERE mail = ?', [email], (result, error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
            dao.disconnect();
            return;
        }

        if (result.length === 0) {
            res.status(404).json({ error: 'Adresse e-mail non trouvée.' });
            dao.disconnect();
            return;
        }

        // Mis à jour le mot de passe dans la base de données
        dao.query('UPDATE utilisateurs SET mdp = ? WHERE mail = ?', [newPassword, email], (updateResult, updateError) => {
            if (updateError) {
                console.error(updateError);
                res.status(500).json({ error: 'An error occurred while updating the password.' });
            } else {
                res.status(200).json({ message: 'Mot de passe réinitialisé avec succès' });
            }
            dao.disconnect();
        });
    });
});
  
app.post('/submitReview', (req, res) => {
    const { rating, review } = req.body; 
  
    dao.connect();
  
    // Insérer l'avis dans la base de données
    const insertQuery = 'INSERT INTO avis (note, commentaire) VALUES (?, ?)';
    dao.query(insertQuery, [rating, review], (error, results) => {
      if (error) {
        console.error('Erreur lors de l\'enregistrement de l\'avis :', error);
        res.status(500).send('Erreur lors de l\'enregistrement de l\'avis');
      } else {
        console.log('Avis enregistré avec succès!');
        res.send('Avis enregistré avec succès!');
      }
      dao.disconnect();
    });
  });
  
  app.post('/reservation', (req, res) => {
    const reservation = req.body; // Vous devez inclure ces informations dans la requête
    const randomUuid = uuid.v4();
    
    dao.connect();
    
    dao.query(
        'INSERT INTO reservations (id, id_client, id_offre, prix_reservation) VALUES (?, ?, ?, ?)',
        [randomUuid, reservation.userId, reservation.offerId, reservation.price],
        (result, error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred' });
            } else {
                console.log('Reservation inserted successfully:', result);
                res.status(201).json({ message: 'Reservation inserted successfully' });
            }
            dao.disconnect();
        }
    );
}); 
app.listen(PORT, () => {
    console.log(`Server listening on: http://192.168.56.1:${PORT}`);
});


