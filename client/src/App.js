import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import getStore from './redux/store';
import Nav from './navigation';
import RequestHeader from './RequestHeader';
import RequestList from './RequestsList';
import RequestDetails from './requestDetails';
import './App.css';

const exampleRequest = {"id":"b74e65a3-9144-3b32-87b1-c2573a7f325a","requested_at":"2016-12-23 21:33","requested_by":"heaney.ida@hotmail.com","recipient":"Requester","sender":"whitney89@gmail.com","subject":"Qui est cumque aut eius nam.","rejected_status":""};

const store = getStore({});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Nav />
                <Switch >
                    <Route path='/quarantined' component={Quarantined} />
                    <Route exact path='/' component={Requests}/>
                </Switch>
            </Router>
        </Provider>
    );
}

const Requests = (props) => {
    return (
        <Main>
            <RequestHeader />
            <RequestList />
            <RequestDetails />
        </Main>
    );
};

const Quarantined = () => <Main>Quarantined</Main>;

export default App;


const Main = (props) => {
    return (
		<main id="main">
            {props.children}
        </main>
    );
}
