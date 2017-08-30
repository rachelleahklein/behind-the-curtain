import React from 'react';
import FormattedSummary from './FormattedSummary'

const SUMMARY_API = 'http://54.213.83.132/hackoregon/http/all_oregon_sum/_/';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: [],
    }
  this.hitSummaryServer = this.hitSummaryServer.bind(this);
  }

  hitSummaryServer() {
    return fetch(SUMMARY_API)
      .then(response => response.json())
      .then(data => this.setState({ summary: data[0] }))
      .catch(error => console.log(error))
  }
  componentDidMount() {
    this.hitSummaryServer();
  }

  render() {
    return (
      <div>
        <FormattedSummary summary={this.state.summary} />
      </div>
    );
  }
}

export default Summary;
