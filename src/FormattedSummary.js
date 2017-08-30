import React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.section`
  float: left;
  padding: 2%;
  background: skyblue;
  margin: 1% 2.5% 2.5%;
  border-radius: 5px;
  width: 50%;
  font-size: 1.75rem;
`;

function FormattedSummary(props) {
  const summary = props.summary;
  return (
    <SummaryWrapper>
      <p>In: ${summary["in"]}</p>
      <p>Out: {summary["out"]}</p>
      <p>From Oregon: {summary["from_within"]}</p>
      <p>To Oregon: {summary["to_within"]}</p>
      <p>From outside Oregon: {summary["from_outside"]}</p>
      <p>To outside Oregon: {summary["to_outside"]}</p>
      <p>Total grassroots donations: {summary["total_grassroots"]}</p>
      <p>Total from in state: {summary["total_from_in_state"]}</p>
    </SummaryWrapper>
  )
}

export default FormattedSummary;
