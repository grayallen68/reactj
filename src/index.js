import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Info from './info';
import birdPage from './birdPage';
import About from './About';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
            <Route exact path={"/info"} component={Info} />
            <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route path={process.env.PUBLIC_URL + '/info/:birdname'} component={birdPage}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
