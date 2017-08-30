import React from 'react';
import styled from 'styled-components';

const StylishListItem = styled.li`
  font-size: 1.75rem;
  margin: 0 auto;
`;

function DonorItem(props) {
  return <StylishListItem>{props.donor.contributor_payee}: ${(props.donor.sum).toFixed(2)}</StylishListItem>;
}

export default DonorItem;
