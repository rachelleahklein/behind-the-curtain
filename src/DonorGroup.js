import React from 'react';
import DonorList from './DonorList'
import donors from './donors.json';

class DonorGroup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    donors: donors
  }
}
// componentDidMount() {
//   this.setState({donors: newDonors});
// }
  render() {
    return (
      <DonorList donors={this.state.donors} />
    );
  }
}

export default DonorGroup;
