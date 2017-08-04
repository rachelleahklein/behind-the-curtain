import React from 'react';
import DonorItem from './DonorItem'

function DonorList(props) {
  return (
    <ul>
      {props.donors.map((donor) =>
        <DonorItem key={donor.contributor_payee.toString()} donor={donor} />
      )}
    </ul>
  );
}

export default DonorList;
