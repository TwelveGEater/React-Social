import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetworkApp from './UI/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SocialNetworkApp />, document.getElementById('root'));

serviceWorker.unregister();
