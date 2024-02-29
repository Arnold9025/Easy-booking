import React from 'react';
import Card from 'react-bootstrap/Card';
import './HotelCard.css'; // Assurez-vous d'ajouter ce fichier de style

function HotelCard({ data, update }) {
  return (
    <Card className="horizontal-card">
      <div className="card-img-container">
        <Card.Img 
          variant="top"
          src={data.main_photo_url || data.photo1 || "default_image_url_here"} 
        />
      </div>
      <Card.Body className="card-body-container">
        <Card.Title>{data.hotel_name || data.name || "Default Hotel Name"}</Card.Title>
        <Card.Text>
          Address: {data.address || data.address_trans || "N/A"}
          <br />
          Price: {parseFloat(data.min_total_price)*0.27 || parseFloat(data.price)*0.27 || "N/A"} { "USD"}
          <br />
          Review: {data.review_score || data.rating || "N/A"}
          <br />
          Distance to CC: {data.distance_to_cc || data.distance_to_center || "N/A"}
          <br />
          {/* Add other fields as needed, using similar conditional rendering */}
        </Card.Text>
        <button onClick={() => update(data)}>Select Offer</button>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;
