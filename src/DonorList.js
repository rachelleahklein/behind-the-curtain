import React from 'react';
import donors from './donors.json';

class DonorList extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    donors: donors
  }
}

render() {
  return (
    <div>
      <ul>
      {
        this.state.donors.map(function(donor) {
          return(
            <li key={donor.contributor_payee}>{donor.contributor_payee} - {donor.sum}</li>
          );
        })
      }
      </ul>
    </div>
  );
}
}

export default DonorList;
