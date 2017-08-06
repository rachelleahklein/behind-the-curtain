import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DonorGroup from './DonorGroup'
import registerServiceWorker from './registerServiceWorker';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<DonorGroup />, document.getElementById('root'));
registerServiceWorker();
