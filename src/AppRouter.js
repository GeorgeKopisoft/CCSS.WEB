import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/error/NotFound';
import Home from './pages/home/Home';
import Login from './pages/home/Login';
import Help from './pages/common/Help';
import Show from './pages/crud/Show';
import Update from './pages/crud/Update';
import Insert from './pages/crud/Insert';
import Delete from './pages/crud/Delete';
import CrudManager from './pages/crud/CrudManager';

const AppRouter = () => {
    return (
        <Fragment>
            <App>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/crud" component={CrudManager} />
                    <Route exact path="/crud/show" component={Show} />
                    <Route exact path="/crud/update" component={Update} />
                    <Route exact path="/crud/delete" component={Delete} />
                    <Route exact path="/crud/insert" component={Insert} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </App>
        </Fragment>
    )
}

export default AppRouter;
