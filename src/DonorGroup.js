import React from 'react';
import DonorList from './DonorList'

class DonorGroup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    donors: [],
    url: props.url
  }
  this.hitServer = this.hitServer.bind(this);
}

hitServer(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ donors: data }))
    .catch(error => console.log(error))
}

componentDidMount() {
  this.hitServer('http://54.213.83.132/hackoregon/http/oregon_business_contributors/5/');
}

  render() {
    return (
      <DonorList donors={this.state.donors} />
    );
  }
}

export default DonorGroup;
