import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MiningDashboard from './components/MiningDashboard';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MiningDashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;