import React, {Suspense, Lazy} from 'react';
import {BroserRouter as Router, Route, Swich} from 'react-router-dom';

const Routes = () => {
    <Router>

        <Suspense fallback={ <div></div> }>

            <Switch>

                <Route path="/login" component={} />
            
            </Switch>

        </Suspense>
    
    </Router>
}