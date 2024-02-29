import React, { Component } from 'react';

class ReviewStep extends Component {
  handleSubmit = () => {
    this.props.onSubmit();
  };

  render() {
    const { personalInfo, contactInfo, acceptedTerms, onPrev } = this.props;

    return (
      <div>
        <h2>Review Your Information</h2>
        <div>
          <strong>First Name:</strong> {personalInfo.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {personalInfo.lastName}
        </div>
        <div>
          <strong>Email:</strong> {contactInfo.email}
        </div>
        <div>
          <strong>Phone:</strong> {contactInfo.phone}
        </div>
        <div>
          <strong>Are you an agency?</strong> {personalInfo.isAgency ? 'Yes' : 'No'}
        </div>
        <div>
          <input
            type="checkbox"
            name="acceptedTerms"
            onChange={this.props.onChange}
          />
          <label>I accept the terms of use</label>
        </div>
        <button onClick={onPrev}>Previous</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default ReviewStep;
