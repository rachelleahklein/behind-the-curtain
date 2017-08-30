import React from 'react';
import DonorItem from './DonorItem'
import styled from 'styled-components';

const Wrapper = styled.section`
  float: left;
  padding: 2%;
  background: lightblue;
  margin: 1% 2.5% 2.5%;
  border-radius: 5px;
  width: 30%;
`;

const StylishList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
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
