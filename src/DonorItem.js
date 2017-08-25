import React from 'react';

function DonorItem(props) {
  return <li>{props.donor.contributor_payee}: ${(props.donor.sum).toFixed(2)}</li>;
}

export default DonorItem;
