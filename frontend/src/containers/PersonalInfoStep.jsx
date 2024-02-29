import React, { Component } from 'react';
import InputComponent from '../components/input-component';
class PersonalInfoStep extends Component {
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.props.onChange({ [name]: value });
  };

  render() {
    const { data, onNext } = this.props;
    const isAgency = data.isAgency;
    const formStyle = {
        backgroundColor: '#f2f2f2', // Set your desired background color here
        padding: '20px', // Add padding for spacing
      };
    return (
      <div style={formStyle}>
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="roleSelect">Select your role:</label>
          <select
            className="form-control" // Use Bootstrap class for styling
            id="roleSelect"
            name="isAgency"
            value={isAgency ? 'agency' : 'client'}
            onChange={this.handleInputChange}
          >
            <option value="client">Client</option>
            <option value="agency">Agency</option>
          </select>
        </div>
        {isAgency ? (
          <div className="form-group">
            <InputComponent // Use your InputComponent here
              text="Agency Name:"
              type="text"
              className="form-control" // Use Bootstrap class for styling
              id="agencyNameInput"
              name="firstName"
              value={data.firstName}
              onChange={this.handleInputChange}
            />
          </div>
        ) : (
          <>
            <div className="form-group">
              <InputComponent // Use your InputComponent here
                text="First Name:"
                type="text"
                className="form-control" // Use Bootstrap class for styling
                id="firstNameInput"
                name="firstName"
                value={data.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <InputComponent // Use your InputComponent here
                text="Last Name:"
                type="text"
                className="form-control" // Use Bootstrap class for styling
                id="lastNameInput"
                name="lastName"
                value={data.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </>
        )}
        <button className="btn btn-primary" onClick={onNext}>Next</button>
      </div>
    );
  }
}

export default PersonalInfoStep;
