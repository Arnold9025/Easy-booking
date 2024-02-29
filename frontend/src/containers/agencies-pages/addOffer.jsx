import React, { Component } from 'react';
import { Container, Row, Form, Col, Button, Card, Table, InputGroup } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './css/home-page.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FlightInfo from '../../components/flight-info';
import SelectComponent from '../../components/select-component';
import { format } from 'date-fns';
import LandingPageHeader from '../../components/Headers/LandingPageHeader';
import {Pagination, PaginationItem, PaginationLink, Alert } from 'reactstrap';
import HotelCard from '../../components/hotel_cards/hotel-card';

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url_image: '',
      nom_offre: '',
      addOfferSteps:'addFlight',
      activeTab: 'accueil',
      flightData: [],
      isLoading: true,
      departureDate: null,
      returnDate: null,
      numberOfAdult: 2,
      numberOfChildren: 2,
      numberOfInfants: 0,
      currentPage: 1,
      itemsPerPage: 15,
      selectedFlight: {},
      selectedHotel: {},
      hotels: [],
      flight_price: 0 ,
      hotel_price: 0,
      alert1: false,
      alertMessage:{
        alertState:"",
        alertMes:""

      },
      departure: [
        {
          nom: "Montréal-Pierre Elliott Trudeau International Airport",
          value: "YUL"
        },
        {
          nom: "Québec City Jean Lesage International Airport",
          value: "YQB"
        },
        {
          nom: "Mont-Tremblant International Airport",
          value: "YTM"
        },
        {
          nom: "Montréal-Mirabel International Airport",
          value: "YMX"
        },
        {
          nom: "Montréal Saint-Hubert Longueuil Airport",
          value: "YHU"
        },
        {
          nom: "Saguenay-Bagotville Airport ",
          value: "YBG"
        },
        {
          nom: "Québec City/Rochester International Airport",
          value: "YRQ"
        },
        {
          nom: "Sept-Îles Airport ",
          value: "YZV"
        },
        {
          nom: "Gaspé Airport",
          value: "YGP"
        },
        {
          nom: "Rouyn-Noranda Airport ",
          value: "YUY"
        },
      ],
      arrival:[
        {
          "nom": "Aéroport international de Dubaï",
          "value": "DXB"
        },
        {
          "nom": "Aéroport international de Toronto Pearson",
          "value": "YYZ"
        },
        {
          "nom": "Aéroport international Daniel K. Inouye d'Honolulu",
          "value": "HNL"
        },
        {
          "nom": "Aéroport de Bora Bora",
          "value": "BOB"
        }
      ],
      selectedDeparture: "YUL",
      selectedArrival:"YRQ",
      modal: false,
      totalCost: 0,
      // État pour stocker les résultats de la recherche de vols
    };
    this.handleModalChange = this.handleModalChange.bind(this)

  }
handleUrlImage = (e) => {
   this.setState({url_image: e.target.value})
   console.log(this.state.url_image)
}
handleNomOffre = (e) => {
  this.setState({nom_offre: e.target.value})
  console.log(this.state.nom_offre)
}
  formatDate(date) {
    const formattedDate = format(date, 'dd-MM-yyyy');
  return formattedDate;
  }

  handleDepartureChange = (e) => {
    this.setState({ selectedDeparture: e.target.value });
  }
  handleModalChange (mod) {
    this.setState({ modal: mod });
  }
  handleArrivalChange = (e) => {
    this.setState({ selectedArrival: e.target.value });
    console.log(this.state.selectedArrival);
  }

  handleStartDateChange = (date) => {
    this.setState({ departureDate: date });
    console.log("departure date:", date);
  };

  handleEndDateChange = (date) => {
    this.setState({ returnDate: date });
    console.log("return date:", date);
  };
  updateSelectedPlan = (offerPlaneS) => {
    this.setState({selectedFlight : offerPlaneS})
    this.setState({flight_price: parseFloat(offerPlaneS.price)})
    this.setAlert1(true);
    this.setState({ alertMessage: {alertState: "success", alertMes: "Vous avez choisi un vol avec succes"}})
  }
  handleAddOfferClick = () => {
      alert('Enregistrement réussi!');
      const data = {
        nom_offre: this.state.nom_offre,
        url_image: this.state.url_image,
        vol: JSON.stringify(this.state.selectedFlight),
        hotel: JSON.stringify(this.state.selectedHotel),
        id: this.props.currentUser.uuid,
        totalCost: this.state.totalCost
    }
    fetch('http://192.168.56.1:5000/offres', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json(data))
        .then(response => {
            this.setState({ users: response })
        });
    
  };

  searchFlight = (e) => {
    e.preventDefault();
    // Format the dates
    const formattedDepartureDate = this.formatDate(this.state.departureDate);
    const formattedReturnDate = this.formatDate(this.state.returnDate);
  
    this.setState({ addOfferSteps: 'addFlight'})

    // Now you can use formattedDepartureDate and formattedReturnDate in your fetch request
    fetch(`http://192.168.56.1:5000/searchFlights/${this.state.selectedDeparture}/${this.state.selectedArrival}/${formattedDepartureDate}/${formattedReturnDate}/${this.state.numberOfAdult}/${this.state.numberOfChildren}/${this.state.numberOfInfants}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        this.setState({ flightData: data, isLoading: false });
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({ isLoading: false });
      });
  }
  searchHotel = (e) => {
    e.preventDefault();
    this.setState({ addOfferSteps: 'addHotel'})
    fetch(`http://192.168.56.1:5000/searchHotels/${this.state.selectedFlight.cityTo}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data:", data.result);
      this.setState({hotels: data})
    })
    .catch((error) => {
      
      console.error('Error:', error);
    });  }
    renderReviewOffer() {
      const { selectedFlight } = this.state;
  
      return (
        <div>
          <div>
              <h3>Révision de l'offre</h3>
              <h4>Vol</h4>
              <div><strong>Ville de Départ:</strong> {selectedFlight.cityFrom || 'N/A'}</div>
              <div><strong>Ville de Destination:</strong> {selectedFlight.cityTo || 'N/A'}</div>
              <div><strong>Heure de Départ:</strong> {selectedFlight.local_departure|| 'N/A'}</div>
              <div><strong>Heure d'Arrivée:</strong> {selectedFlight.local_arrival || 'N/A'}</div>
              <div><strong>Prix:</strong> {selectedFlight.price || 'N/A'} USD</div>
              <div><strong>Compagnie:</strong> {selectedFlight.airlines.join(',') || 'N/A'}</div>
          </div>
          <div>
             <h4>Hotel</h4>
             <div><strong>Address:</strong>  {this.state.selectedHotel.address || this.state.selectedHotel.address_trans || "N/A"}</div>
             <div><strong>Review:</strong> {this.state.selectedHotel.review_score || this.state.selectedHotel.rating || "N/A"}</div>
             <div><strong>Distance to CC:</strong>{this.state.selectedHotel.distance_to_cc || this.state.selectedHotel.distance_to_center || "N/A"}</div>
             <div><strong>Prix:</strong> {this.state.hotel_price} USD</div>
         </div>
         <div>Total: {this.state.totalCost}</div>
         <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">https//</InputGroup.Text>
        <Form.Control
          placeholder="url de l'image"
          aria-label="url de l'image" 
          aria-describedby="basic-addon1"
          name='urlImage'
          onChange= {this.handleUrlImage}
        />
      </InputGroup>
      <Form.Control type="text" placeholder="Nom de l'offre" name='nom_offre' onChange={this.handleNomOffre}/>

         <Button onClick={this.handleAddOfferClick}>Creer une offre</Button>
         </div>
      )
  }
  
  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };
  updateSelectedHotel = (offerHotel) => {
    this.setState({hotel_price: parseFloat(offerHotel.min_total_price)*0.27 || parseFloat(offerHotel.price)*0.27})
    this.setState({selectedHotel : offerHotel})
    this.setAlert1(true);
    this.setState({ alertMessage: {alertState: "success", alertMes: "Vous avez choisi un hotel avec succes"}})
    console.log(this.state.selectedHotel)
  }

  renderSearchResult = () => {
    const { flightData, isLoading } = this.state;

    if (isLoading) {
      return <div>Chargement en cours...</div>;
    } else if (!flightData || flightData.length === 0) {
      console.log(this.state.flightData);
      return <div>Aucun vol trouvé.</div>;
    } else if (this.state.addOfferSteps === 'addFlight') {
      console.log(this.state.flightData);
      return (
        <Container fluid >
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Resultat des recherches</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover ">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Ville de Depart</th>
                      <th className="border-0">Ville de destination</th>
                      <th className="border-0">Heure de Depart</th>
                      <th className="border-0">Heire d'Arrivee</th>
                      <th className="border-0">Prix</th>
                      <th className="border-0">Compagnie</th>
                      <th className="border-0">Action</th>

                    </tr>
                  </thead>
                  <FlightInfo flightData={this.state.flightData} currentPage={this.state.currentPage} itemsPerPage={this.state.itemsPerPage} update= {this.updateSelectedPlan} />

                </Table>
              
              </Card.Body>

            </Card>
          </Col>
          
        </Row>
        <Row className="mt-4 justify-content-center">
                     {this.renderPagination()}
              </Row>
        <Row>
          <Button onClick={this.searchHotel}>Ajouter un Hotel </Button>
        </Row>
      </Container>

      );
    } else if(this.state.addOfferSteps === 'addHotel') {
      return( <div>
        <h1>Les Hotels</h1>
      {this.state.hotels.map((hotelData, index) => (
        <HotelCard key={index} data={hotelData} update = {this.updateSelectedHotel} />
      ))}
      <Button onClick={() => {    this.setState({ addOfferSteps: 'reviewOffer', totalCost: this.state.flight_price + this.state.hotel_price})
      }}>Review Offer </Button>
      </div> ) 
    } else if (this.state.addOfferSteps === 'reviewOffer'){
      return (
        <Row>
          {this.renderReviewOffer()}
        </Row>
      );
    }
  }
 
  renderPagination() {
    let items = [];
    let totalPages = Math.ceil(this.state.flightData.length / this.state.itemsPerPage);
    const { currentPage } = this.state;

    // Previous button
    items.push(
        <PaginationItem key="prev" disabled={currentPage === 1}>
            <PaginationLink
                aria-label="Previous"
                href="#pablo"
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) this.setState({ currentPage: currentPage - 1 });
                }}
            >
                <span aria-hidden={true}>
                    <i className="fa fa-angle-double-left"></i>
                </span>
            </PaginationLink>
        </PaginationItem>
    );

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <PaginationItem key={number} active={number === currentPage}>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({ currentPage: number });
                    }}
                >
                    {number}
                </PaginationLink>
            </PaginationItem>
        );
    }

    // Next button
    items.push(
        <PaginationItem key="next" disabled={currentPage === totalPages}>
            <PaginationLink
                aria-label="Next"
                href="#pablo"
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) this.setState({ currentPage: currentPage + 1 });
                }}
            >
                <span aria-hidden={true}>
                    <i className="fa fa-angle-double-right"></i>
                </span>
            </PaginationLink>
        </PaginationItem>
    );

    // If the items are too many, split them into two rows.
    const itemsFirstRow = items.slice(0, Math.ceil(items.length / 2));
    const itemsSecondRow = items.slice(Math.ceil(items.length / 2));

    return (
        <div>
            <Pagination>{itemsFirstRow}</Pagination>
            <Pagination>{itemsSecondRow}</Pagination>
        </div>
    );
}

renderAgencySearrchPanel(){
 return( <Col md={10} className="mx-auto">
  <Form>
    <Row>
      <Col md={3}>
        <Form.Group controlId="origin">
          <SelectComponent
            text="De ?"
            id="departure"
            name="departure"
            options={this.state.departure}
            onInput={this.handleDepartureChange}
          />
        </Form.Group>
      </Col>
      <Col md={3}>
        <Form.Group controlId="destination">
          <SelectComponent
            text="A ?"
            id="arrival"
            name="arrival"
            options={this.state.arrival}
            onInput={this.handleArrivalChange}
          />
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group controlId="departDate">
          <DatePicker
            selected={this.state.departureDate}
            onChange={this.handleStartDateChange}
            selectsStart
            startDate={this.state.departureDate}
            endDate={this.state.returnDate}
            placeholderText="Date de départ"
            className="custom-datepicker form-control"
          />
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group controlId="returnDate">
          <DatePicker
            selected={this.state.returnDate}
            onChange={this.handleEndDateChange}
            selectsEnd
            startDate={this.state.departureDate}
            endDate={this.state.returnDate}
            minDate={this.state.departureDate}
            placeholderText="Date de retour"
            className="custom-datepicker form-control"
          />
        </Form.Group>
      </Col>
      <Col>
        <Button variant="primary" type="submit" onClick={this.searchFlight}>
          Rechercher
        </Button>
        <Button variant="primary" type="submit" onClick={() => this.handleModalChange(true)}>
          Plus
        </Button>
        
      </Col>
    
    </Row>
    <Row>
       <Col lg="3" sm="6">
         <p className="category">Nombre d'adultes</p>
         <input type="range" id="frameRange" min="1" max="9" value={this.state.numberOfAdult} onChange={this.handleNumberOfAdultChange}/>
       </Col>
       <Col lg="3" sm="6">
         <p className="category">Nombre d'enfants</p>
         <input type="range" id="frameRange" min="1" max="9" value={this.state.numberOfChildren} onChange={this.handleNumberOfChildrenChange}/>
       </Col>
       <Col lg="3" sm="6">
         <p className="category">Nombre de bebe</p>
         <input type="range" id="frameRange" min="1" max="9" value={this.state.numberOfInfants} onChange={this.handleNumberOfInfantsChange}/>
       </Col>
    </Row>
  </Form>
</Col>)
}
handleNumberOfAdultChange = (e) =>{
  this.setState({numberOfAdult: e.target.value})
  console.log(e.target.value);}
handleNumberOfChildrenChange = (e) =>{
  this.setState({numberOfChildren: e.target.value})
  console.log(e.target.value);
}
handleNumberOfInfantsChange = (e) =>{
  this.setState({numberOfInfants: e.target.value})
  console.log(e.target.value);
}
setAlert1 = (al) => {
  this.setState({alert1: al})
}


render() {
    return (
      
      <div>
        
        <LandingPageHeader />

        <Container fluid>
          <Row className="mt-5">
              {this.renderAgencySearrchPanel()}
          </Row>

          {/* Section de résultats (à personnaliser en fonction des données) */}
          <Row className="mt-5">
              {/* Vous pouvez afficher les résultats de la recherche ici */}
              {this.renderSearchResult()}

          </Row>
        </Container>
        <Alert color= {this.state.alertMessage.alertState} isOpen={this.state.alert1} className='floating-alert'>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> {this.state.alertMessage.alertMes}
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

export default AddOffer;
