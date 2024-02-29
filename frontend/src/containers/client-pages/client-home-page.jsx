import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import StarRating from "./star-rating";

import "./css/client-home-page.css";
import SearchBar from "../../components/search-bar";
import { Nav, Navbar, Container, Row, Col, Form } from "react-bootstrap";
import logoImage from "./img/easybk.png";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import { LanguageProvider } from "../languageContext";
import LangueComponent from "../../components/langue-component";
import TransparentFooter from "../../components/Footers/TransparentFooter";

import { Button } from "reactstrap";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "accueil",
      selectedLanguage: "fr",
      offres: [],
      offresPopulaires: [],
      selectedOfferPrice: "",
      searchQuery: "",
      user: null, // Initialiser l'état de l'utilisateur à null
      rating: 0,
      reviews: "",
      reviewText: "",
      selectedRating:0,
      newPassword: "", // État pour le nouveau mot de passe
      passwordChangeSuccess: false, // État pour le message de succès
      passwordChangeError: false, // État pour le message d'erreur
    };
    console.log(this.props.user);
  }

  componentDidMount() {
    this.fetchUserProfile();
    // Effectuez une requête AJAX pour récupérer les données depuis votre API
    fetch(`http://192.168.56.1:5000/offrespopulaire`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
      this.setState({ offresPopulaires: data});
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  handleReservation = (offerId, price) => {
    const reservationData = {
      userId: this.props.currentUser.uuid,
      offerId: offerId,
      price: price
    }
    fetch('http://192.168.56.1:5000/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('reservation registration successful:', data);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  }

  renderOffres = (offres) => {
    if (!offres || offres.length === 0) {
      return(
        <p>Aucun resultat</p>
      )
     } else {
    return offres.map((offre) => (
      <div key={offre.id} className="offer">
        <img src={offre.image} className="offer-image" alt={offre.nom_offre} />
        <div className="offer-description">
          <h5 className="desc">{offre.nom_offre}</h5>
          <p>{offre.total_price} $</p>
        </div>
        <button
          className="btn-primary"
          onClick={this.handleReservation(offre.id, offre.total_price)}
        >
          Réserver
        </button>
      </div>
    ));
   }
   
  };

  //  Fonction pour récupérer les informations de l'utilisateur depuis votre API
  async fetchUserProfile() {
    try {
      const userEmail = Cookies.get("user_email");
      console.log("User Email from Cookie:", userEmail);
      const response = await axios.get(`http://192.168.56.1:5000/users/${userEmail}`);
       
      const userData = response.data;
      console.log("userDataa :", userData);
      console.log("User Email from Cookie:", Cookies.get("user_email"));
      console.log("User Telephone from Cookie:", Cookies.get("user_telephone"));

      // Stockez les informations de l'utilisateur dans les cookies
      Cookies.set("user_nom", userData.nom);
      Cookies.set("user_prenom", userData.prenom);
      Cookies.set("user_email", userData.mail);
      Cookies.set("user_telephone", userData.tel);

      this.setState({ user: userData });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de l'utilisateur :",
        error
      );
    }
  }

  handleTabChange = async (tab) => {
    console.log("Activation de l'onglet :", tab);
    this.setState({ activeTab: tab });

    if (tab === "profil") {
      try {
        // Code pour gérer l'onglet "Profil"
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      }
    }
  };

  handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    this.setState({ selectedLanguage });
  };

  handleChangePassword = async () => {
    const { newPassword } = this.state;

    try {
      const response = await axios.post(
        "http://192.168.56.1:5000/changepassword",
        {
          newPassword,
        }
      );

      if (response.status === 200) {
        // Changement de mot de passe réussi
        this.setState({
          passwordChangeSuccess: true,
          passwordChangeError: false,
          newPassword: "", // Réinitialisez le champ du nouveau mot de passe
        });
      } else {
        // Gérez les erreurs ici
        this.setState({
          passwordChangeSuccess: false,
          passwordChangeError: true,
        });
      }
    } catch (error) {
      // Gérez les erreurs réseau ici
      console.error("Erreur lors du changement de mot de passe :", error);
      this.setState({
        passwordChangeSuccess: false,
        passwordChangeError: true,
      });
    }
  };

  // Fonction pour gérer la recherche
  handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    fetch(`http://192.168.56.1:5000/offres/${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data:", data);
      this.setState({ offres: data});
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    this.setState({ searchQuery }, () => {
      console.log("Recherche en cours :", this.state.searchQuery);
    });
  };
  handleLogout = () => {
    // Supprimer les cookies de l'utilisateur
    Cookies.remove("user_nom");
    Cookies.remove("user_prenom");
    Cookies.remove("user_email");
    Cookies.remove("user_telephone");

    window.location.href = "/login";
  };

  renderNavBar = () => {
    return (
      <Navbar className="transparent-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#accueil">
            <img
              src={logoImage}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="Votre Logo"
              onClick={() => this.handleTabChange("accueil")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#accueil"
                onClick={() => this.handleTabChange("accueil")}
                className="nav-link-icon"
              >
                <i className="fa fa-home"></i>{" "}
                <span className="nav-link-text">Accueil</span>
              </Nav.Link>
              <Nav.Link
                href="#recherche"
                onClick={() => this.handleTabChange("recherche")}
                className="nav-link-icon"
              >
                <i className="fa fa-search"></i>{" "}
                <span className="nav-link-text">Recherche</span>
              </Nav.Link>
              <Nav.Link
                href="#profil"
                onClick={() => this.handleTabChange("profil")}
                className="nav-link-icon"
              >
                <i className="fa fa-user"></i>{" "}
                <span className="nav-link-text">Profil Client</span>
              </Nav.Link>
              <Nav.Link
                href="#logout"
                onClick={this.handleLogout}
                className="nav-link-icon"
              >
                <i className="fa fa-sign-out"></i>{" "}
                <span className="nav-link-text">Déconnexion</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  renderClientInfoForm = () => {
    const { user } = this.state;
    if (!user) {
      return (
        <Form className="mx-auto">
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value="" readOnly />
          </Form.Group>
          <Form.Group controlId="formTelephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="text" value="" readOnly />
          </Form.Group>
        </Form>
      );
    }

    return (
      <Form className="mx-auto">
        <Form.Group controlId="formNom">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" value={user.nom} readOnly />
        </Form.Group>
        <Form.Group controlId="formPrenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" value={user.prenom} readOnly />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={user.mail} readOnly />
        </Form.Group>
        <Form.Group controlId="formTelephone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="text" value={user.tel} readOnly />
        </Form.Group>
      </Form>
    );
  };

  handleChangeRating = (value) => {
    this.setState({ selectedRating: value });
  };

  handleChangeReviewText = (event) => {
    this.setState({ reviewText: event.target.value });
  };

  submitReview = () => {
    const { selectedRating, reviewText } = this.state;
  
    if (selectedRating === 0) {
      alert("Veuillez sélectionner une note.");
      return;
    }
  
    if (reviewText.trim() === "") {
      alert("Veuillez saisir un avis.");
      return;
    }
  
    this.setState((prevState) => {
      const updatedReviews = Array.isArray(prevState.reviews) ? [...prevState.reviews] : [];
      updatedReviews.push({ rating: selectedRating, review: reviewText });
  
      return {
        reviews: updatedReviews,
        selectedRating: 0,
        reviewText: "",
      };
    });
  
    const dataToSend = {
      rating: selectedRating,
      review: reviewText,
    };
  
    axios
      .post("http://localhost:5000/submitReview", dataToSend) 
      .then((response) => {
        console.log("Avis envoyé avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'avis :", error);
      });
  };
  

  renderAvis = () => {
    return (
      <Form className="mx-auto">
        <StarRating
          maxStars={5}
          selectedRating={this.state.selectedRating}
          onStarClick={this.handleChangeRating}
        />
        <Form.Group controlId="formReview">
          <Form.Label>Avis</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.reviewText}
            onChange={this.handleChangeReviewText}
            placeholder="Saisissez votre avis..."
          />
        </Form.Group>
        <Button variant="primary" onClick={this.submitReview}>
          Soumettre l'avis
        </Button>
      </Form>
    );
  };

  render() {
    return (
      <Router>
        <LanguageProvider>
          {this.state.activeTab === "accueil" && (
            <div className="containerAccueil">
              <Container className="mt-5">
                {/* Add top margin to create space */}
                {/* Offers Section */}
                <div className="banner">
                  {/* Navigation Bar */}
                  {this.renderNavBar()}
                </div>
                <div className="sliderContainer">
                  <div className="slides">
                    <div className="slide">
                      <img
                        src="https://www.bestjobersblog.com/wp-content/uploads/2018/07/CHECK-LIST-VACANCES-2.jpg"
                        alt="3"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://www.ravage.fr/wp-content/uploads/2017/11/Voyages-Vacances-e1509741169115-1.jpg"
                        alt="1"
                      />
                    </div>
                    <div className="slide">
                      <img
                        src="https://api.ellequebec.com/app/uploads/2022/04/Destinations-europe-2022.jpg"
                        alt="2"
                      />
                    </div>
                  </div>
                </div>
                <div className="designTitle">
                  <p>Le plus beau voyage, c'est celui qu'on</p>
                  <p>n'a pas encore fait.</p>
                  <h6>Loïck Peyron</h6>
                </div>
                <div>
                  <h4>Les plus populaires...</h4>
                </div>

                <Row>{this.renderOffres(this.state.offresPopulaires)}</Row>
                <div className="fh">
                  <div className="flights">
                    <img
                      src="https://wallpapers.com/images/hd/flight-zgveis6o1hmvkhcy.jpg"
                      alt="flights"
                    />
                    <h2>Flights</h2>
                    <p>Voyager pour le plaisir de voyager.</p>
                  </div>
                  <div className="hotels">
                    <img
                      src="https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o="
                      alt="flights"
                    />
                    <h2>Hotels</h2>
                    <p>Jusqu'à ce que demain vienne!!</p>
                  </div>
                </div>

                <p>
                  « Personne ne réalise à quel point il est agréable de voyager
                  jusqu'à ce que l'on rentre chez soi et que l'on pose sa tête
                  sur son vieil oreiller familier. » - Lin Yutang
                </p>
                <h2>Reviews</h2>
                <div className="Fit">
                  <div className="hotel1">
                    <h2>Dubai,UAE</h2>
                  </div>
                  <div className="hotel2">
                    <h2>Paris,FRA</h2>
                  </div>
                  <div className="hotel3">
                    <h2>Sydney,AUS</h2>
                  </div>
                  <div className="hotel4">
                    <h2>London.UK </h2>
                  </div>
                </div>
                <TransparentFooter />
              </Container>
            </div>
          )}

          {this.state.activeTab === "recherche" && (
            <div>
              <Container>
                <Row>
                  <h1>Voici la recherche</h1>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <SearchBar
                      searchQuery={this.state.searchQuery}
                      onSearchChange={this.handleSearchChange}
                    />
                    {this.renderOffres(this.state.offres)}
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          {this.state.activeTab === "profil" && (
            <div className="bodyProfil">
              <div className="navBar">{this.renderNavBar()}</div>
              <div className="contentWrapper">
                <div className="profil">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt={`${this.state.user.prenom} ${this.state.user.nom}`}
                      />
                    </div>
                    <p className="f-w-600">
                      {this.state.user.prenom} {this.state.user.nom}
                    </p>
                    <p>Client</p>
                  </div>
                </div>
                <div className="clientInfoForm">
                  {this.renderClientInfoForm()}
                </div>
                <div className="clientInfoForm">{this.renderAvis()}</div>
              </div>
              <TransparentFooter />
            </div>
          )}
        </LanguageProvider>
      </Router>
    );
  }
  }
export default HomePage;
