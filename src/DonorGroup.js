import React from 'react';
import DonorList from './DonorList'

const BUSINESS_API = 'http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/';
const DONOR_API = 'http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/'

class DonorGroup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    businesses: [],
    donors: []
  }
  this.hitBusinessServer = this.hitBusinessServer.bind(this);
  this.hitDonorServer = this.hitDonorServer.bind(this);
}

hitBusinessServer() {
  return fetch(BUSINESS_API)
    .then(response => response.json())
    .then(data => this.setState({ businesses: data }))
    .catch(error => console.log(error))
}

hitDonorServer() {
  return fetch(DONOR_API)
    .then(response => response.json())
    .then(data => this.setState({ donors: data }))
    .catch(error => console.log(error))
}

componentDidMount() {
  this.hitBusinessServer();
  this.hitDonorServer();
}

  render() {
    return (
      <div>
        <DonorList donors={this.state.businesses} />
        <DonorList donors={this.state.donors} />
      </div>
    );
  }
}

export default DonorGroup;
