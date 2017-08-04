import React from 'react';

function DonorList(props) {
  return (
    <div>
      <ul>
      {
        props.donors.map(function(donor) {
          return(
            <li key={donor.contributor_payee}>{donor.contributor_payee} - {donor.sum}</li>
          );
        })
      }
      </ul>
    </div>
  );
}

export default DonorList;
