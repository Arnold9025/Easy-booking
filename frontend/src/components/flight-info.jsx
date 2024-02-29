import React from 'react';
import { Button } from 'reactstrap';

function FlightInfo({ flightData, currentPage, itemsPerPage, update }) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = flightData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <tbody>
      {currentItems.map((flight, index) => (

      <tr>
                      <td>{index + 1}</td>
                      <td>{flight.cityFrom}, {flight.countryFrom.name}</td>
                      <td>{flight.cityTo}, {flight.countryTo.name}</td>
                      <td>{flight.local_departure}</td>
                      <td>{flight.local_arrival}</td>
                      <td> {flight.price} USD</td>
                      <td>{flight.airlines.join(', ')}</td>
                      <td><button onClick={() => update(flight)}>Selectionner</button></td>

      </tr>
       
      ))}
    </tbody>
  );
}

export default FlightInfo;
