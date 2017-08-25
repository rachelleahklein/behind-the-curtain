import React from 'react';
import DonorItem from './DonorItem'
import styled from 'styled-components';

const Wrapper = styled.section`
  float: left;
  padding: 1rem;
  background: lightblue;
  border: 5px solid #369;
  margin: 1%;
  border-radius: 5px;
`;

const StylishList = styled.ul`
  list-style: none;
`;

function DonorList(props) {
  return (
    <Wrapper>
      <StylishList>
        {props.donors.map((donor) =>
          <DonorItem key={donor.contributor_payee.toString()} donor={donor} />
        )}
      </StylishList>
    </Wrapper>
  );
}

export default DonorList;
