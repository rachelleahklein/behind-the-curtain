import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DonorList from './DonorList'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DonorList />, document.getElementById('root'));
registerServiceWorker();
