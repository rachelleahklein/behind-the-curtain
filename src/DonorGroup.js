import React from 'react';
import DonorList from './DonorList'
import styled from 'styled-components';

const BUSINESS_API = 'http://54.213.83.132/hackoregon/http/oregon_business_contributors/';
const DONOR_API = 'http://54.213.83.132/hackoregon/http/oregon_individual_contributors/'

const InputWrapper = styled.div`
  clear: both;
  margin: 2.5%;
`;

class DonorGroup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    businesses: [],
    donors: [],
    textValue: 5,
  }
  this.hitBusinessServer = this.hitBusinessServer.bind(this);
  this.hitDonorServer = this.hitDonorServer.bind(this);
  this.descendingButtonClick = this.descendingButtonClick.bind(this);
  this.ascendingButtonClick = this.ascendingButtonClick.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

makeUrl(type, num) {
  var baseUrl = (type === 'business' ? BUSINESS_API : DONOR_API);
  var url = baseUrl + num + '/';
  return url
}

hitBusinessServer() {
  return fetch(this.makeUrl('business', this.state.textValue))
    .then(response => response.json())
    .then(data => this.setState({ businesses: data }))
    .catch(error => console.log(error))
}

hitDonorServer() {
  return fetch(this.makeUrl('individual', this.state.textValue))
    .then(response => response.json())
    .then(data => this.setState({ donors: data }))
    .catch(error => console.log(error))
}

componentDidMount() {
  this.hitBusinessServer();
  this.hitDonorServer();
}

descendingButtonClick() {
  function descendingSort(a,b) {
    return parseFloat(b.sum, 10) - parseFloat(a.sum, 10);
  }
  const sortedDonors = this.state.donors.sort(descendingSort);
  const sortedBusinesses = this.state.businesses.sort(descendingSort);
  this.setState({
    donors: sortedDonors,
    businesses: sortedBusinesses
  });
}

ascendingButtonClick() {
  function ascendingSort(a,b) {
    return parseFloat(a.sum, 10) - parseFloat(b.sum, 10);
  }
  const sortedDonors = this.state.donors.sort(ascendingSort);
  const sortedBusinesses = this.state.businesses.sort(ascendingSort);
  this.setState({
    donors: sortedDonors,
    businesses: sortedBusinesses
  });
}

handleInputChange(event) {
  this.setState({textValue: event.target.value});
}

handleSubmit(event) {
  this.hitBusinessServer();
  this.hitDonorServer();
  event.preventDefault();
  }

  render() {
    return (
      <div>
        <DonorList donors={this.state.businesses} />
        <DonorList donors={this.state.donors} />
        <InputWrapper>
          <button btn-primary onClick={this.ascendingButtonClick}>Ascending Order</button>
          <button onClick={this.descendingButtonClick}>Descending Order</button>
          <form onSubmit={this.handleSubmit}>
            <p>Enter the number of results you would like to see.</p>
            <input type="text" value={this.state.textValue} onChange={this.handleInputChange} />
            <input type="submit" value="Submit" />
            </form>
        </InputWrapper>
      </div>
    );
  }
}

export default DonorGroup;
