import React from 'react';

function DonorItem(props) {
  return <li>{props.donor.contributor_payee}: {props.donor.sum}</li>;
}

export default DonorItem;
