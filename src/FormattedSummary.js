import React from 'react';

function FormattedSummary(props) {
  const summary = props.summary;
  return (
    <div>
      <p>In: ${summary["in"]}</p>
      <p>Out: {summary["out"]}</p>
      <p>From Oregon: {summary["from_within"]}</p>
      <p>To Oregon: {summary["to_within"]}</p>
      <p>From outside Oregon: {summary["from_outside"]}</p>
      <p>To outside Oregon: {summary["to_outside"]}</p>
      <p>Total grassroots donations: {summary["total_grassroots"]}</p>
      <p>Total from in state: {summary["total_from_in_state"]}</p>
    </div>
  )
}

export default FormattedSummary;
