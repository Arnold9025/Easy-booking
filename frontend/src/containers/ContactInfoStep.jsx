import React, { Component } from 'react';
import InputComponent from '../components/input-component';

class ContactInfoStep extends Component {
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.props.onChange({ [name]: value });
  };

  render() {
    const { data, onPrev, onNext } = this.props;

    const formStyle = {
      backgroundColor: '#f2f2f2', // Set your desired background color here
      padding: '20px', // Add padding for spacing
    };

    return (
      <div style={formStyle} >
        <h2>Contact Information</h2>
        <div >
          <div className="form-group">
            <InputComponent
              text="Email:"
              type="email"
              id="emailInput"
              name="email"
              value={data.email}
              className="form-control"
              onChange={this.handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <InputComponent
              text="Phone:"
              type="tel"
              id="phoneInput"
              name="phone"
              value={data.phone}
              className="form-control"
              onChange={this.handleInputChange}
            />
          </div><div className="form-group">
            <InputComponent
              text="Passwod:"
              type="password"
              id="password"
              name="password"
              value={data.password}
              className="form-control"
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={onPrev}>Previous</button>
          <button className="btn btn-primary" onClick={onNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default ContactInfoStep;
